	<?php

	$action = isset($_POST['action']) ? $_POST['action'] : "";
	switch($action){
		case 'GetArticle':
			$data = Database::select("SELECT * FROM articles WHERE id = ?", array($_POST['id']));
			echo json_encode($data);
		break;
		case 'GetPoll':
			$data = Database::select("SELECT * FROM poll 
			LEFT JOIN polloptions ON poll.id = polloptions.poll_id 
			WHERE poll.id = ?", array($_POST['id']));
			echo json_encode($data);
		break;
		case 'CreateArticle':
			$data = Database::insert("INSERT INTO articles (title, author, article) VALUES (?, ?, ?)", array($_POST['title'], $_POST['name'], $_POST['content']));
			echo json_encode($data);
			break;
		case 'CreatePoll':
			$data = Database::insert("INSERT INTO poll (title, author, description) VALUES (?, ?, ?)", array($_POST['title'], $_POST['author'], $_POST['description']));
			foreach ($_POST['options'] as $option) {
				Database::insert("INSERT INTO polloptions (poll_id, name) VALUES (?, ?)", array($data, $option));
			}
			echo json_encode($data);
		break;
		case 'GetAllArticles':
			$data = Database::select("SELECT * FROM articles", array());
			echo json_encode($data);
        break;
        case 'GetAllPolls':
            $data = Database::select("SELECT * FROM poll", array());
            //$pollIds = array_column($polls, "id");
            //$pollOptions = Database::select("SELECT * FROM polloptions WHERE poll_id IN (" + implode(", ", $pollIds) + ")");
            echo json_encode($data);
        break;
		case 'EditArticle':
			$data = Database::update("UPDATE articles SET title=?, author=?, article=? WHERE id=?", array($_POST['title'], $_POST['name'], $_POST['content'], $_POST['id']));
			echo json_encode($data);
		break;
		case 'EditPoll':
			$data = Database::update("UPDATE poll SET title=?, author=?, description=? WHERE id=?", array($_POST['title'], $_POST['author'], $_POST['description'], $_POST['id']));
			foreach ($_POST['options'] as $option) {
				if(strpos($option[0], 'option-') !== false){
					$data = Database::insert("INSERT INTO polloptions (poll_id, name) VALUES (?, ?)", array($_POST["id"], $option[1]));
				}
				else{
					$data = Database::update("UPDATE polloptions SET name = ? WHERE id = ?", array($option[1], $option[0]));
				}
			}
		break;
		case 'PollVote':
			Database::update("UPDATE polloptions SET votes=votes+1 WHERE id = ?", array($_POST['id']));
		break;
		case 'GetComments':
			$poll_id;
			$article_id;
			isset($_POST['article_id']) ? $article_id = $_POST['article_id'] :false;
			isset($_POST['poll_id']) ? $poll_id = $_POST['poll_id']:false;
			$data = null;
			if(isset($article_id)){
				$data = Database::select("SELECT * FROM comments WHERE article_id = ?", array($article_id));
			}else if(isset($poll_id)){
				$data = Database::select("SELECT * FROM comments WHERE poll_id = ?", array($poll_id));
			}
			echo json_encode($data);
		break;
		case 'CreateComment':
			$poll_id;
			$article_id;
			isset($_POST['article_id']) ? $article_id = $_POST['article_id'] : false;
			isset($_POST['poll_id']) ? $poll_id = $_POST['poll_id']: false;
			$comment = $_POST['comment'];
			$author = $_POST['author'];
			$data = null;
			if(isset($poll_id)){
				$data = Database::insert("INSERT INTO comments (comment, poll_id, author) VALUES (?,?,?)", array($comment, $poll_id, $author));
			}else if(isset($article_id)){
				$data = Database::insert("INSERT INTO comments (comment, article_id, author) VALUES (?,?,?)", array($comment, $article_id, $author));
			}
			echo json_encode($data);
		break;
		case 'DeleteArticle':
			//Database::update("DELETE FROM comments WHERE article_id = ?", array($_POST['id']));
			$data = Database::update("DELETE FROM articles WHERE id = ?", array($_POST['id']));
			echo json_encode($data);
		break;
		case 'DeletePoll':
			Database::update("DELETE FROM polloptions WHERE poll_id = ?", array($_POST['id']));
			Database::update("DELETE FROM comments WHERE poll_id = ?", array($_POST['id']));
			$data = Database::update("DELETE FROM poll WHERE id = ?", array($_POST['id']));
			echo json_encode($data);
		break;
	}

	class Database {

		private static $db;
		private $connection;

		private function __construct() {
			try 
			{
				//Database informationer skal ændres
				$this->connection = new PDO('mysql:host=192.168.159.39;dbname=tunc;', 'root', 'Password1', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8") );
				//--------------------------------------------------------------------------------------------------------------
				$this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$this->connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false );
			}
			catch (PDOException $e)
			{
				echo $e->getMessage();
			}
		
		}

		function __destruct() {
			$this->connection = null;
		}

		public static function getConnection() {
			if (self::$db == null) {
				self::$db = new self();
			}
			return self::$db->connection;
		}
		public static function select($sql, $params) {
			$stmt = self::getConnection()->prepare($sql);
			foreach ($params as $key => $value) {
				if (is_null($value))
					$value = '';
				if (gettype($value) == "string") 
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_STR);
				else 
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_INT);
			}
			$stmt->execute();
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		public static function insert($sql, $params) {
			$stmt = self::getConnection()->prepare($sql);
			foreach ($params as $key => $value) {
				if (empty($value))
					$value = '';
				if (gettype($value) == "string")
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_STR);
				else
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_INT);
			}
			$stmt->execute();
			return self::getConnection()->lastInsertId();
		}
		public static function update($sql, $params) {
			$stmt = self::getConnection()->prepare($sql);
			foreach ($params as $key => $value) {
				if (empty($value))
					$value = '';
				if (gettype($value) == "string")
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_STR);
				else
					$stmt->bindParam($key + 1, $params[$key], PDO::PARAM_INT);
			}
			$stmt->execute();
		}
		public static function selectRow($sql, $params) {
			$result = self::select($sql, $params);
			if (isset($result[0]))
				return $result[0];
			else 
				return false;
		}
	}
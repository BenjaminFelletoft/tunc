<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Edit Article</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>
<script>
    var article_id = "<?php echo $_GET['article_id']; ?>";
</script>
<?php require('layout.php') ?>
<body>
    <div class="module-container col-lg-8 col-lg-offset-2">
        <div class="module-header">
            <p>Title</p><input id="title" type="text">
            <p>Name</p><input id="name" type="text">
            <p>Content</p><textarea id="content" name="content"></textarea>
            <button id="save">Save Changes</button>
        </div>
    </div>
</body>
<script src="js/edit_article.js"></script>
</html>
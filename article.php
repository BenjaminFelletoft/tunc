<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/article.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script>
        var article_id = "<?php echo $_GET["article_id"]; ?>";
        </script>
</head>
<body>
    <div class="article-container col-lg-8 col-lg-offset-2">
        <div class="article-header">
            <h1 class="article-title">Title</h1>
            <p class="article-author">author</p>
            <p class="article-date">date</p>
        </div>
        <div class="article-content">
            Content
        </div>
    </div>
    <script src="js/article.js"></script>
</body>
</html>
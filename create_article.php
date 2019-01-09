<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Create Article</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>
<?php require('layout.php') ?>
<body>
    <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
        <div class="module-header">
            <div class="form-group">
                <label for="title" class="h4">Title</label>
                <input type="text" id="title" class="form-control">
            </div>
            <div class="form-group">
                <label for="name" class="h4">Author</label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="content" class="h4">Content</label>
                <textarea id="content" name="content" class="form-control"></textarea>
            </div>
            <button id="save" class="btn btn-primary">Save</button>
        </div>
    </div>
</body>
<script src="js/create_article.js"></script>
</html>
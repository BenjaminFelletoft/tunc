<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Create Article</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/create_article.css" />
</head>
<?php require('layout.php') ?>
<body>
    <p>Title</p><input id="title" type="text">
    <p>Name</p><input id="name" type="text">
    <p>Content</p><textarea id="content" name="content"></textarea>
    <button id="save">Save</button>
</body>
<script src="js/create_article.js"></script>
</html>
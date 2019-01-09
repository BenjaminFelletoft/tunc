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
                <a class="btn btn-default btn-xs" onclick="insertText()"><i class="fas fa-plus-square"></i></a>
                <textarea id="content" name="content" class="form-control"></textarea>
            </div>
            <button id="save" class="btn btn-primary">Save</button>
        </div>
    </div>
</body>
<script src="js/edit_article.js"></script>
<script src="js/insert.js"></script>
</html>
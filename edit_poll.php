<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Create Poll</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
    <script>
        var poll_id = "<?php echo $_GET['poll_id']; ?>";
    </script>
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
                <input type="text" id="author" class="form-control">
            </div>
            <div class="form-group">
                <label for="description" class="h4">Content</label>
                <a class="btn btn-default btn-xs" onclick="insertText()"><i class="fas fa-plus-square"></i></a>
                <textarea id="description" name="content" class="form-control"></textarea>
            </div>
            <div class="form-group" id="options">

            </div>
            <div class="form-group">
                <button id="add-option" class="btn btn-primary">Add Option</button>
                <button id="save" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</body>
<script src="js/edit_poll.js"></script>
<script src="js/insert.js"></script>
</html>
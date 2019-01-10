<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
</head>
<html>
    <?php require('layout.php'); ?>
    <body>
        <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
            <div class="comments-content">
                <h1 class="comments-title">Comments</h1>
                <div class="link-content">
                    <label for="author" class="h4" style="float:left">Author</label>
                    <input type="text" id="author" class="form-control" style="max-width:30%">
                    <label for="author" class="h4" style="float:left">Your Comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
                    <button type="button" class="btn btn-success" style="float:left">Comment</button>
                </div>
            </div>
        </div>
    </body>
    <script src="js/comments.js"></script>
</html>
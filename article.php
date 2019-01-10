<!DOCTYPE html>
<html>
    <script>
        var article_id = "<?php echo $_GET['article_id']; ?>";
        var poll_id;
    </script>
    <?php require('layout.php'); ?>
    <body>
        <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
            <div class="module-header">
                <h1 class="module-title"></h1>
                <a href="" id="edit" class="btn btn-primary btn-edit">Edit</a>
                <p class="article-author"></p>
                <p class="article-date"></p>
            </div>
            <div class="module-content">
            </div>
        </div>
        <?php require('comments.php'); ?>
    </body>
    <script src="js/article.js"></script>
</html>
<!DOCTYPE html>
<html>
    <script>
        var article_id = "<?php echo $_GET["article_id"]; ?>";
    </script>
    <?php require('layout.php') ?>
    <body>
        <div class="article-container col-lg-8 col-lg-offset-2">
            <div class="article-header">
                <h1 class="article-title"></h1>
                <p class="article-author"></p>
                <p class="article-date"></p>
            </div>
            <div class="article-content">
            </div>
        </div>
    </body>
    <script src="js/article.js"></script>
</html>
<!DOCTYPE html>
<?php require('layout.php') ?>
<html>
<body>
    <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
        <div class="module-header">
            <h1 class="module-title">Articles</h1>
            <input class="search form-control" id="searchInput" onkeyup="searchArticles()" type="text" placeholder="Search..">
        </div>
        <ul id="articleList" class="module-content container">
        </ul>
    </div>
</body>
<script src="js/frontpage.js"></script>
</html>
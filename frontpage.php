<!DOCTYPE html>
<?php require('layout.php') ?>
<html>
<body>
    <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
        <div class="module-header">
            <h1 class="module-title">Articles</h1>
            <input class="search" id="searchInput" onkeyup="searchArticles()" type="text" placeholder="Search..">
            <h5 id="sortText">Sort Articles A-Z By:</h5>
            <input class="sortButtons" type="button" onclick="sortArticlesByTitle()" value="Title">
            <input class="sortButtons" type="button" onclick="sortArticlesByAuthor()" value="Author">
            <input class="sortButtons" type="button" onclick="sortArticlesByPosted()" value="Posted On">
        </div>
        <ul id="articleList" class="module-content container">
        </ul>
    </div>
</body>
<script src="js/frontpage.js"></script>
</html>
$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetArticle', id:article_id},
        method:'POST',
        dataType:'json',
        success:PrintArticles
    });
});

function PrintArticles(article){
    article = JSON.parse(article);
    $('.article-title').html(article['titel']);
    $('.article-content').append(article['article']);
    $('.article-date').html(article['created_at']);
    $('.article-author').html(article['author']);
}
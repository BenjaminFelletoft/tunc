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
    $('.module-title').text(article[0]['title']);
    $('.article-author').text(article[0]['author']);
    $('.article-date').text(article[0]['created_at']);
    $('.module-content').append(article[0]['article']);
}
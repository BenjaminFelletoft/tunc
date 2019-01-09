$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetArticle', id:article_id},
        type:'POST',
        dataType:'json',
        success:PrintArticles,
        error:function(data){
            console.log(data);
        }
    });

    $('#edit').attr('href', 'edit_article.php?article_id=' + article_id);
});

function PrintArticles(article){
    $('.module-title').text(article[0]['title']);
    $('.article-author').text(article[0]['author']);
    $('.article-date').text(article[0]['created_at']);
    $('.module-content').html(article[0]['article']);
}
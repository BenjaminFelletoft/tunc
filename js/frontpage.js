$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetAllArticles'},
        type:'POST',
        dataType:'json',
        success:PrintArticleLinks,
        error: function (data) {
            console.log(data);
        },
    });
});

function PrintArticleLinks(articles){
    console.log(articles);
    articles.forEach(article => {
        $('.module-content').append(
            `<button class="link-container col-lg-10 col-lg-offset-1" id="`+article["id"]+`">
            <h3 class="link-title">`+article['title']+`</h3>
            <p class="link-author">`+article['author']+`</p>
            <p class="link-date">`+article['created_at']+`</p>
            <div class="link-content panel panel-default">`+article['article']+`</div>
        </button>`);

        $('#'+article["id"]).click(function(){
            window.location.href = "article.php?article_id="+article["id"];
        });
    });
}
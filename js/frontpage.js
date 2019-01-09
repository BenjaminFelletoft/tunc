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
    var articleCount = articles.length;
    articles.forEach(article => {
        var articleContainer = $("<div></div>").addClass("col-lg-8 article").attr("id", article["id"])
            .append($("<h3></h3>").text(article["title"]))
            .append($("<p></p>").addClass("lead").text("by " + article["author"]))
            .append($("<hr>"))
            .append($("<p></p>").text("Posted on " + article["created_at"]))
            .append($("<hr>"))
            .append($("<div></div>").addClass("link-content").html(article["article"]));
        
        $(".module-content").append(articleContainer);

        if (articles.indexOf(article) + 1 !== articleCount) {
            $("module-content").append($("<hr>"));
        }
        /* $('.module-content').append(
            `<button class="link-container col-lg-10 col-lg-offset-1" id="`+article["id"]+`">
            <h3 class="link-title">`+article['title']+`</h3>
            <p class="link-author">`+article['author']+`</p>
            <p class="link-date">`+article['created_at']+`</p>
            <div class="link-content panel panel-default">`+article['article']+`</div>
        </button>`); */

        $('#'+article["id"]).click(function(){
            window.location.href = "article.php?article_id="+article["id"];
        });
    });
}
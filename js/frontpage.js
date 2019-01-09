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
function searchArticles() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("articleList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function PrintArticleLinks(articles){
    var articleCount = articles.length;
    articles.forEach(article => {
        var articleContainer = $("<li></li>").append(
            $("<div></div>").addClass("col-lg-8 article").attr("id", article["id"])
            .append($("<h3></h3>").text(article["title"]))
            .append($("<p></p>").addClass("lead").text("by " + article["author"]))
            .append($("<hr>"))
            .append($("<p></p>").text("Posted on " + article["created_at"]))
            .append($("<hr>"))
            .append($("<div></div>").addClass("link-content").html(article["article"])));
        
        $(".module-content").append(articleContainer);

        if (articles.indexOf(article) + 1 !== articleCount) {
            $("module-content").append($("<hr>"));
        }

        $('#'+article["id"]).click(function(){
            window.location.href = "article.php?article_id="+article["id"];
        });
    });
}
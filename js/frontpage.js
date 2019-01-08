var text = '{ "articles" : [' +
'{ "title":"title" , "content":"content", "author":"author" , "date":"date", "id":"1"},' +
'{ "title":"title2" , "content":"content2", "author":"author2" , "date":"date2", "id":"2"},' +
'{ "title":"title4" , "content":"content4", "author":"author4" , "date":"date4", "id":"3"},' +
'{ "title":"title3" , "content":"content3", "author":"author3" , "date":"date3", "id":"4"} ]}';

var articles = JSON.parse(text);

PrintArticleLinks(articles);

function PrintArticleLinks(articles){
    console.log(articles.articles);
    articles.articles.forEach(article => {
        $('.module-content').append(
            `<button class="link-container col-lg-10 col-lg-offset-1" id="`+article["id"]+`">
            <h3 class="link-title">`+article['title']+`</h3>
            <p class="link-author">`+article['author']+`</p>
            <p class="link-date">`+article['date']+`</p>
            <div class="link-content panel panel-default">`+article['content']+`</div>
        </button>`);

        $('#'+article["id"]).click(function(){
            window.location.href = "article.php?article_id="+article["id"];
        });
    });
}
var article_title = $('title').val();
var article_name = $('name').val();
var article_content = $('content').val();

$(document).on('click','#save',function(e) {
    article_title = $('#title').val();
    article_name = $('#name').val();
    article_content = $('#content').val();
    //alert(article_content);
    var data = $("#form-search").serialize();
    $.ajax({
           data: {action:'CreateArticle', title:article_title, name:article_name, content:article_content},
           type: "POST",
           dataType:'json',
           url: "resources/database.php",
           success: function(data){
                alert("Data Save: " + data);
           }
  });
});
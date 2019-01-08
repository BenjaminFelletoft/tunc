$(document).on('click','#save',function(e) {
    var data = $("#form-search").serialize();
    $.ajax({
           data: {action:'CreateArticle', title:$('#title').val(), name:$('#name').val(), content:$('#content').val()},
           type: "POST",
           url: "resources/database.php",
           success: function(data){
                console.log(data);
                document.location.href = "/article.php?article_id=" + data.replace("\"", "");
           },
           error:function(data){
            console.log(data);
        }
  });
});
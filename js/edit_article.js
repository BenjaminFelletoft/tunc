$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetArticle', id:article_id},
        type:'POST',
        dataType:'json',
        success:GetArticle,
        error:function(data){
            console.log(data);
        }
    });
});

function GetArticle(article) {
    $('#title').val(article[0]['title']);
    $('#name').val(article[0]['author']);
    $('#content').val(article[0]['article']);
}

$(document).on('click','#save',function(e) {
    $.ajax({
           data: {action:'EditArticle', title:$('#title').val(), name:$('#name').val(), content:$('#content').val(), id:article_id},
           type: "POST",
           url: "resources/database.php",
           success: function(data){
                console.log(data);
                document.location.href = "article.php?article_id=" + article_id;
           },
           error:function(data){
            console.log(data);
        }
  });
});
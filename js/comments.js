$(document).ready(function(){
    
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetComments', id:[article_id, poll_id]},
        type:'POST',
        dataType:'json',
        success:PrintComments,
        error:function(data){
            console.log(data);
        }
    });
});

function PrintComments(comments){
    console.log(comments);
    $('.comment-author').text(poll[0]['author']);
    $('.comment-content').text(poll[0]['comment']);
    $('.comment-date').text(poll[0]['created_at']);

}
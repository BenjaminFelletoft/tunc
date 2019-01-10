$(document).ready(function(){

    $.ajax({
        url:'resources/database.php',
        data:{action:'GetComments', article_id:article_id, poll_id:poll_id},
        type:'POST',
        dataType:'json',
        success:PrintComments,
        error:function(data){
            console.log(data);
        }
    });
});

function PrintComments(comments){
    comments.forEach(comment => {
        console.log(comment);
        /*$('.comments-content').append(
            `
            `
        );
        $('.comment-author').text(poll[0]['author']);
        $('.comment-content').text(poll[0]['comment']);
        $('.comment-date').text(poll[0]['created_at']);*/
    });
}

function SaveComment(){
    console.log("test");
    $.ajax({
        data: {action:'CreateComment', author:"John Doe", comment:"Interesting.", article_id:article_id, poll_id:poll_id},
        type: "POST",
        url: "resources/database.php",
        success: function(data){
            console.log(data);
            location.reload();
        },
        error:function(data){
            console.log(data);
        }
    });
}
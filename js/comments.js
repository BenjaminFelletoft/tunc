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
    $('.comments-content').append(
        `<div class="comment">
            <label for="author" class="h4" style="float:left">Author</label>
            <input type="text" id="author" class="form-control" style="max-width:30%">
            <label for="comment-content" class="h4" style="float:left">Your Comment</label>
            <textarea class="form-control" id="comment-content" rows="7"></textarea>
            <button id="save-comment" type="button" class="btn btn-success" style="float:left">Comment</button>
        </div>`
    );
}

$('#save-comment').click(function(){
    console.log("test");
    $.ajax({
        data: {action:'CreateComment', author:$('#author').val(), comment:$('#comment-content').val(), article_id:article_id, poll_id:poll_id},
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
});
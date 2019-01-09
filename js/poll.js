$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetPoll', id:poll_id},
        type:'POST',
        dataType:'json',
        success:PrintPoll,
        error:function(data){
            console.log(data);
        }
    });
});

function PrintPoll(poll){
    $('.module-title').text(poll[0]['title']);
    $('.poll-author').text(poll[0]['author']);
    $('.poll-date').text(poll[0]['created_at']);
    $('.module-content').append(poll[0]['description']);
    $('.module-content').append('<hr>');

    var allVotes = 0;
    poll.forEach(option => {
        allVotes += option["votes"];
    });
    poll.forEach(option => {
        var percent = option["votes"] / allVotes * 100;
        $('.module-content').append(
            `<div class="progress" id="`+option["id"]+`">
                <div class="progress-bar" 
                role="progressbar" 
                style="width: `+percent+`%;" 
                aria-valuenow="`+option["votes"]+`" 
                aria-valuemin="0" 
                aria-valuemax="`+allVotes+`">`+option["name"]+` - `+option["votes"]+`</div>
            </div>`
        );
    });
    $('.progress').click(function(){
        var option_id = $(this).attr("id");
        $.ajax({
            url:'resources/database.php',
            data:{action:'PollVote', id:option_id},
            type:'POST',
            success:function(){
                location.reload(true);
            },
            error:function(data){
                console.log(data);
            }
        });
    });
}
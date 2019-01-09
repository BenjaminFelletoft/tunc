$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetPoll,', id:poll_id},
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
    console.log(poll);
    /*poll[].forEach(element => {
        
    });
    $('.module-content').append(
        `<div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>`
    );*/
}
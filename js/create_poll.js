$(document).on('click','#add-option',function(e) {
    $('#options').append(`
        <div>
            <input class="option" style="display: inline">
            <button class="delete-option" style="display: inline">Delete</button>
        </div>
    `);
});

$(document).on('click','.delete-option',function(e) {
    $(this).parent().remove();
});

$(document).on('click','#save',function(e) {
    $.ajax({
        data: {action:'CreatePoll', title:$('#title').val(), name:$('#name').val(), content:$('#content').val()},
        type: "POST",
        url: "resources/database.php",
        success: function(data){
            console.log(data);
            document.location.href = "/poll.php?poll_id=" + data.replace("\"", "").replace("\"", "");
        },
        error:function(data){
            console.log(data);
        }
    });
});


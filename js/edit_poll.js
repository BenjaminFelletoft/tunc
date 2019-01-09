var optionCounter = 0;

$(document).on('click','#add-option',function(e) {
    optionCounter += 1;

    var optionContainer = $("<div></div>")
        .append($("<label></label").attr("for", "option-" + optionCounter).text("Option " + optionCounter).css("display", "block"))
        .append($("<input>").attr("id", "option-" + optionCounter).addClass("option form-control").css("display", "inline"))
        .append($("<button></button>").addClass("delete-option btn btn-primary").css("display", "inline").text("Delete"));
    
        $("#options").append(optionContainer);
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
            document.location.href = "/data.php?poll_id=" + data.replace("\"", "").replace("\"", "");
        },
        error:function(data){
            console.log(data);
        }
    });
});
$(document).ready(function(){
    $.ajax({
        data: {action:'GetPoll', id:poll_id},
        type: "POST",
        dataType:"json",
        url: "resources/database.php",
        success: function(data){
            console.log(data);
            $("#title").val(data[0]['title']);
            $("#author").val(data[0]['author']);
            $("#description").text(data[0]['description']);
            var allVotes = 0;
            data.forEach(option => {
                allVotes += option["votes"];
            });
            data.forEach(option => {
                var percent = option["votes"] / allVotes * 100;

                /*.append($("<label></label").attr("for", "option-" + optionCounter).text("Option " + optionCounter).css("display", "block"))
                .append($("<input>").attr("id", "option-" + optionCounter).addClass("option form-control").css("display", "inline"))
                .append($("<button></button>").addClass("delete-option btn btn-primary").css("display", "inline").text("Delete"));
*/
                $('#options').append(

                    
                    `<div class="progress" id="`+option["id"]+`">
                        <div class="progress-bar" 
                        role="progressbar" 
                        style="width: `+percent+`%; text-align: left; padding-left:5px" 
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
        },
        error:function(data){
            console.log(data);
        }
    });
});

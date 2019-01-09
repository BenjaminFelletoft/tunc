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
    var options = [];
    $('input.option').each(function(index, option) {
        options.push($(option).val());
    });
    $.ajax({
        data: {action:'CreatePoll', title:$('#title').val(), author:$('#author').val(), description:$('#description').val(), options},
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


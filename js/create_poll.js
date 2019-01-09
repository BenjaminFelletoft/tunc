var optionCounter = 0;

$(document).on('click','#add-option',function(e) {
    optionCounter += 1;

    var optionContainer = $("<div></div>")
        .append($("<label></label").attr("for", "option-" + optionCounter).text("Option " + optionCounter).css("display", "block"))
        .append($("<input>").attr("id", "option-" + optionCounter).addClass("option form-control").css("display", "inline"))
        .append($("<button></button>").addClass("delete-option btn btn-primary btn-block").css("display", "inline").text("Delete"));

    $("#options").append(optionContainer);
    /* $('#options').append(`
        <div>
            <input class="option form-control" style="display: inline">
            <button class="delete-option btn btn-primary" style="display: inline">Delete</button>
        </div>
    `); */
});

$(document).on('click','.delete-option',function(e) {
    optionCounter -= 1;
    $(this).parent().remove();

    // Count the existing options again
    var tempCounter = 0;
    $("input.option").each(function(index, input) {
        tempCounter += 1;
        $(input).attr("id", "option-" + tempCounter);
        $(input).siblings("label").attr("for", "option-" + tempCounter).text("Option " + tempCounter);
    });
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


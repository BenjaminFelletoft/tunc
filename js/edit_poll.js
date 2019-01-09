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
        options.push([$(option).attr("id"), $(option).val()]);
    });
    $.ajax({
        data: {action:'EditPoll', title:$('#title').val(), author:$('#author').val(), description:$('#description').val(), id:poll_id, options},
        type: "POST",
        url: "resources/database.php",
        success: function(data){
            console.log(data);
            document.location.href = "/poll.php?poll_id=" + poll_id;
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

                optionCounter += 1;

                var optionContainer = $("<div></div>")
                    .append($("<label></label").attr("for", option["id"]).text("Option " + optionCounter).css("display", "block"))
                    .append($("<input>").attr("id", option["id"]).addClass("option form-control").css("display", "inline").val(option["name"]))
                    .append($("<button></button>").addClass("delete-option btn btn-primary").css("display", "inline").text("Delete"));
    
                $("#options").append(optionContainer);
            });
        },
        error:function(data){
            console.log(data);
        }
    });
});

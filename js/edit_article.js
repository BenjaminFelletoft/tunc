$(document).ready(function(){
    $.ajax({
        url:'resources/database.php',
        data:{action:'GetArticle', id:article_id},
        type:'POST',
        dataType:'json',
        success:GetArticle,
        error:function(data){
            console.log(data);
        }
    });
});

var lastFocused;
$("textarea").focus(function() {
  lastFocused = document.activeElement;
});

function insertText() {
    navigator.clipboard.readText()
    .then(text => {
        text = "<img src='" + text + "'>"
        var input = lastFocused;
        console.log(input);
        if (input == undefined) { return; }
        var scrollPos = input.scrollTop;
        var pos = 0;
        var browser = ((input.selectionStart || input.selectionStart == "0") ? 
            "ff" : (document.selection ? "ie" : false ) );
        if (browser == "ie") { 
            input.focus();
            var range = document.selection.createRange();
            range.moveStart ("character", -input.value.length);
            pos = range.text.length;
        }
        else if (browser == "ff") { pos = input.selectionStart };

        var front = (input.value).substring(0, pos);  
        var back = (input.value).substring(pos, input.value.length); 
        input.value = front+text+back;
        pos = pos + text.length;
        if (browser == "ie") { 
            input.focus();
            var range = document.selection.createRange();
            range.moveStart ("character", -input.value.length);
            range.moveStart ("character", pos);
            range.moveEnd ("character", 0);
            range.select();
        }
        else if (browser == "ff") {
            input.selectionStart = pos;
            input.selectionEnd = pos;
            input.focus();
        }
        input.scrollTop = scrollPos;
    })
    .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}

function GetArticle(article) {
    $('#title').val(article[0]['title']);
    $('#name').val(article[0]['author']);
    $('#content').val(article[0]['article']);
}

$(document).on('click','#save',function(e) {
    $.ajax({
           data: {action:'EditArticle', title:$('#title').val(), name:$('#name').val(), content:$('#content').val(), id:article_id},
           type: "POST",
           url: "resources/database.php",
           success: function(data){
                console.log(data);
                document.location.href = "article.php?article_id=" + article_id;
           },
           error:function(data){
            console.log(data);
        }
  });
});
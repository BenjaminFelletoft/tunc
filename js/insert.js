var lastFocused;
$("textarea").focus(function() {
  lastFocused = document.activeElement;
});

function insertText() {
    navigator.clipboard.readText()
    .then(text => {
        var addlink = false;
        if(text.match(/\.(jpeg|jpg|gif|png)$/) != null)
        {
            text = "<img src='" + text + "'>";
            addlink = true;
        }
        else if(text.includes("https://www.youtube.com")) {
            text = text.replace(/watch\?v=/g, "embed/");
            text = "<iframe src=" + text + "></iframe>";
            addlink = true;
        }

        if(addlink)
        {

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
        }
        })
        .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}
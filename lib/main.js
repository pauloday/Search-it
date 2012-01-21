function getSelectedText()
{
    var text = "";
    if (typeof window.getSelection != "undefined")
    {
        text = window.getSelection().toString();
    }
    else if (typeof document.selection != "undefined" && document.selection.type == "Text")
    {
        text = document.selection.createRange().text;
    }
    return text;
}

shortcut.add("Ctrl+g", function()
             {
                 var url;
                 var text = escape(getSelectedText().replace(/\+/g, " "));
                 if (text)
                 {
                     url = 'http://google.com/search?ix=hcb&sourceid=chrome&ie=UTF-8&q='
                         + text
                     console.log(text);
                     window.open(url);
                 }
             });

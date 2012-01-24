function getSelectedText()
{
    var text = "";
    if (typeof window.getSelection != 'undefined')
    {
        text = window.getSelection().toString();
    }
    else if (typeof document.selection !='undefined'
             && document.selection.type == 'Text')
    {
        text = document.selection.createRange().text;
    }
    return text;
}

function search (url)
{
    var text = escape(getSelectedText().replace(/\+/g, " "));
    if (text)
    {
        url +=text
        window.open(url);
    }
}

chrome.extension.sendRequest({shortcut: "whatis"},
                             function(response)
                             {
                                 shortcut.add(response.gshortcut, function()
                                              {
                                                  search('http://google.com/search?ix=hcb&sourceid=chrome&ie=UTF-8&q=')
                                              }
                                             )
                                 shortcut.add(response.wshortcut, function()
                                              {
                                                  search('http://www.wolframalpha.com/input/?i=')
                                              }
                                             )
                             }
                            );

var altnotpressed = true;
var shiftnotpressed = true;
var ctrlnotpressed = true;
var letternotpressed = true;
var detecting = false;
var bkg = chrome.extension.getBackgroundPage();

function onKeyDown(e, input)
{
    var letter = String.fromCharCode(e.keyCode)
    if (e.altKey && altnotpressed)
    {
        input.value += 'Alt+';
        altnotpressed = false;
    }
    if (e.shiftKey && shiftnotpressed)
    {
        input.value += 'Shift+';
        shiftnotpressed = false;
    }
    if (e.ctrlKey && ctrlnotpressed)
    {
        input.value += 'Ctrl+';
        ctrlnotpressed = false;
    }
    if (e.keyCode >= 65 && e.keyCode <= 90 && letternotpressed)
    {
        input.value += letter;
        letternotpressed = false;
    }
}

function onKeyUp(button)
{
        detecting = false;
        button.value = 'Click to detect'
        document.onkeydown = null;
        document.onkeyup = null;
        save();
}

function buttonClick(inputid, buttonid)
{
    var input = document.getElementById(inputid);
    var button = document.getElementById(buttonid);
    detecting = true;
    altnotpressed = true;
    ctrlnotpressed = true;
    shiftnotpressed = true;
    letternotpressed = true;
    button.value = 'Detecting...'
    document.getElementById('saved').innerHTML = 'Settings not saved';
    input.value = ''
    document.onkeydown = function(e) {onKeyDown(e, input)};
    document.onkeyup = function() {onKeyUp(button)};
}

function save()
{
    bkg.settings.gshortcut = ginput.value;
    bkg.settings.wshortcut = winput.value;
    document.getElementById('saved').innerHTML = 'Settings saved';
}

function load()
{
    if (bkg.settings.shortcut == undefined)
    {
        bkg.settings.shortcut = 'Ctrl+g';
    }
    document.getElementById('ginput').value = bkg.settings.gshortcut;
    document.getElementById('winput').value = bkg.settings.wshortcut;
}

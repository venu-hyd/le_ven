var allfilesloaded = false;
function loadcssfile(filename, filetype){
    if (filetype=="css"){
if($('link[rel*=style][href="'+filename+'"]').length==0)
{
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
}
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function DrawCaptcha() {
    var a = Math.floor(Math.random() * 10) + '';
    var b = Math.floor(Math.random() * 10) + '';
    var c = Math.floor(Math.random() * 10) + '';
    var d = Math.floor(Math.random() * 10) + '';
    var e = Math.floor(Math.random() * 10) + '';
    var f = Math.floor(Math.random() * 10) + '';
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $(".captha-img")[0].innerHTML = code;
}

function nospecialCharacters(thi, dec)
{
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  else return true;
  if (((keycode >= 65) && (keycode <= 90)) || ((keycode >= 48) && (keycode <= 57)) || ((keycode >= 97) && (keycode <= 122)) || keycode == 32 || keycode == 45 || keycode == 47 || keycode == 92)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function nospecialCharactersaddress(thi, dec)
{

  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  else return true;

  if (((keycode >= 65) && (keycode <= 90)) || ((keycode >= 48) && (keycode <= 57)) || ((keycode >= 97) && (keycode <= 122)) || keycode == 32 || keycode == 45 || keycode == 47 || keycode == 92 || keycode == 44)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function ValidCaptcha() {
    var str1 = removeSpaces(document.getElementById('randomfield').textContent);
    var str2 = removeSpaces(document.getElementById('loginCaptchaCode').value);
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}

function checkConnection() {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'Nonetwork';
            return states[networkState];
        }
  
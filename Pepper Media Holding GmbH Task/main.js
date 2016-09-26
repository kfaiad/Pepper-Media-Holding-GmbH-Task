$(document).ready(function () {

    document.getElementById('file').onchange = function () {

        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function (progressEvent) {

            var lines = this.result.split('\n');
            for (var line = 0; line < lines.length; line++) {
                console.log(lines[line]);
                var oldHTML = document.getElementById('out-put').innerHTML;
                var newHTML = "<p>" + oldHTML + "</p>";
                document.getElementById('out-put').innerHTML = newHTML + lines[line];

            }
        };
        reader.readAsText(file);
    };
    var txt = '';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            txt = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "TheTextFile.txt", true);
    //    xmlhttp.send();
    document.getElementById('js_content2').innerHTML = txt;
    // Check for the various File API support.

    function readTextFile("file:///C:/Users/Khaled/Dropbox/wORK/Pepper%20Media%20Holding%20GmbH%20Task/The%20Text%20File%20.txt"); {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }
});
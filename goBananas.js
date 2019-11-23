const color = '#fff900';
const divs = document.getElementsByTagName('div');
for (var j = 0, k = divs.length; j < k; j++) {
    divs[j].style = "background-color'" + color + ";'";
}
document.body.style.backgroundColor = color;
var backgroundImages = document.getElementsByTagName('a');
for (var j = 0, k = backgroundImages.length; j<k; j++){
    backgroundImages[j].style = "background-image: url(chrome-extension://hogjhmmhbjfejihkbjnjfdiibcbfnkdj/images/banana.png);" +
        "background-size: contain;" +
        "background-repeat: no-repeat;" +
        "background-position: center;"
}
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'chrome-extension://hogjhmmhbjfejihkbjnjfdiibcbfnkdj/images/banana.png';
    images[i].style = 'max-height: 500px; width: auto;';

}


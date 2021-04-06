var audio = new Audio('explosion.mp3');
audio.play();

function functieArray(){
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i];
    }
    document.getElementById("pozeGallery").innerHTML = imgArray.src;
};

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'bang1.png';

imgArray[1] = new Image();
imgArray[1].src = 'bang2.png';

imgArray[2] = new Image();
imgArray[2].src = 'bang3.png';

imgArray[3] = new Image();
imgArray[3].src = 'bang4.png';

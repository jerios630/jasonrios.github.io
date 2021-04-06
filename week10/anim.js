var timeleft = 10;

document.querySelector('#button1').addEventListener('click', ButtonClick);
document.querySelector('#link').addEventListener('click');

function ButtonClick() {
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Bang?";

        } else {
          document.getElementById("countdown").innerHTML = timeleft + " SECONDS REMAINING...";
        }
        timeleft -= 1;
      }, 1000);
}



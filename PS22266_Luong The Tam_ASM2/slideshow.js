var anharr = [];
var currentIndex = 0;
var x;
function loadanh() {
    for (var i = 0; i < 5; i++) {
        anharr[i] = new Object();
        anharr[i].src = "images/anh" + i + ".jpg"
        anharr[i].href = "trang" + i + ".html"
    }
}
function next(){
    clearInterval(x);
        if(currentIndex<5){
            currentIndex++;
            document.getElementById("anh").src = anharr[currentIndex].src;
            document.getElementById("result").href =  anharr[currentIndex].href;
        }
        if(currentIndex==4){
            currentIndex=0;
        }
    }

function back(){
    clearInterval(x);
        if(currentIndex>0){
            currentIndex--;
            document.getElementById("anh").src = anharr[currentIndex].src;
            document.getElementById("result").href =  anharr[currentIndex].href;
        }
        if(currentIndex==0){
            currentIndex=4;
        }
    }

    function nextplay(){

        if(currentIndex<5){
            currentIndex++;
            document.getElementById("anh").src = anharr[currentIndex].src;
            document.getElementById("result").href =  anharr[currentIndex].href;
        }
        if(currentIndex==4){
            currentIndex=0;
        }
    }
    function play() {
        x = setInterval(function(){ nextplay();},1000 );
    }
    function stop() {
         clearInterval(x);
    }
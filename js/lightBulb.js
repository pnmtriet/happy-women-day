const lightBulb = document.querySelector(".lightBulb");

const timeLightOn = 10;//second
let indexPercent = 10;//percent

lightBulb.addEventListener('click', function(event) {
    setTimeout(() => {
        audioEmXinh.pause();
        playHPBD();
        const canvas = document.querySelector("#c");
        const myStep2 = document.querySelector("#step2");
        const myStep3 = document.querySelector("#step3");
        audioKHMSN.pause();
        canvas.setAttribute("hidden","hidden");
        myStep2.setAttribute("hidden","hidden");
        document.body.style.opacity =  indexPercent/100;
        animLightOn();
        myStep3.removeAttribute("hidden");        
    }, 500);
    if(textArray.length) setTimeout(type, 5000);
});


function animLightOn(){
    //10% - 100%
    setTimeout(() => {
        document.body.style.backgroundImage = `url("../images/background.png")`;
        document.body.style.opacity =  indexPercent/100;
        indexPercent+=10;
        if(indexPercent < 100){
            animLightOn();
        }else{
            document.body.style.backgroundImage = `url("../images/background.png")`;
        }

    }, 1000*timeLightOn/10);
   
    document.body.style.backgroundImage = `url("../images/background.png")`;

}
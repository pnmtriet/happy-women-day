const box = document.querySelector(".box");
const maxbox = document.querySelector(".maxbox").querySelectorAll("li");

box.addEventListener("mouseover",()=>{
    boxOpen();
});

box.addEventListener("mouseout",()=>{
    boxClose();
});

function boxOpen() {
    let index = 1;
    const transDefault = "translateZ(300px)";
    maxbox.forEach(e => {
        let transform = transDefault;
        e.style.width = "400px";
        e.style.height = "400px";
        e.style.top = "-100px";
        e.style.left = "-100px";
        e.style.opacity = 0.8;
        switch (index) {
            case 2:
                transform = "rotateX(180deg) " + transDefault;
                break;
            case 3:
                transform = "rotateX(-90deg) " + transDefault;
                break;
            case 4:
                transform = "rotateX(90deg) " + transDefault;
                break;
            case 5:
                transform = "rotateY(-90deg) " + transDefault;
                break;
            case 6:
                transform = "rotateY(90deg) " + transDefault;
                break;
        }
        e.style.transform = transform;
        index++;
    });
}

function boxClose() {
    let index = 1;
    const transDefault = "translateZ(100px)";
    maxbox.forEach(e => {
        let transform = transDefault;
        e.style.width = "200px";
        e.style.height = "200px";
        e.style.top = "0px";
        e.style.left = "0px";
        e.style.opacity = 0.2;
        e.style.transition = "all 1s ease";
        switch (index) {
            case 2:
                transform = "rotateX(180deg) " + transDefault;
                break;
            case 3:
                transform = "rotateX(-90deg) " + transDefault;
                break;
            case 4:
                transform = "rotateX(90deg) " + transDefault;
                break;
            case 5:
                transform = "rotateY(-90deg) " + transDefault;
                break;
            case 6:
                transform = "rotateY(90deg) " + transDefault;
                break;
        }
        e.style.transform = transform;
        index++;
    });
}

const arrayOpen = [2760, 1100, 1200, 150, 150, 150, 150, 
                    //Lời 2
                    5800, 1100, 1200, 150, 150, 150, 150, 5500];
const arrayClose = [200, 200, 200, 200, 200, 200, 200,
                    // Lời 2 
                    200, 200, 200, 200, 200, 200, 200, 5000];
let indexAnim = 0;
const timeEmXinh = 39500;

function animEmXinh() {
    setTimeout(() => {
        boxOpen();
        setTimeout(() => {
            boxClose();
            indexAnim++;
            // animEmXinh();
            if(indexAnim < arrayOpen.length){
                animEmXinh();
            }else{
                indexAnim = 0;
                isPlayAnim = false;
            }
        }, arrayClose[indexAnim]);
    }, arrayOpen[indexAnim]);
   
}
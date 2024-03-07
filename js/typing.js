const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hard xin chaof ahhaha "];
const textArray2 = ["aaaaaaaa "];
const textArray3 = ["bvvvvvvv "];
const textArray4 = ["ccccccc "];
const textArray5 = ["aaaaddddddaaaa "];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

let charIndex2 = 0;
let textArrayIndex2 = 0;

let charIndex3 = 0;
let textArrayIndex3 = 0;


let charIndex4 = 0;
let textArrayIndex4 = 0;

let charIndex5 = 0;
let textArrayIndex5 = 0;


function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    console.log("debug")
    setTimeout(type2, 1500);
  }
}
function type2() {
    if (charIndex2 < textArray2[textArrayIndex2].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray2[textArrayIndex2].charAt(charIndex2);
      charIndex2++;
      setTimeout(type2, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(type3, 1500);
    }
}

function type3() {
    if (charIndex3 < textArray3[textArrayIndex3].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray3[textArrayIndex3].charAt(charIndex3);
      charIndex3++;
      setTimeout(type3, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(type4, 1500);
    }
}

function type4() {
    if (charIndex4 < textArray4[textArrayIndex4].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray4[textArrayIndex4].charAt(charIndex4);
      charIndex4++;
      setTimeout(type4, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(type5, 1500);
    }
}


function type5() {
    if (charIndex5 < textArray5[textArrayIndex5].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray5[textArrayIndex5].charAt(charIndex5);
      charIndex5++;
      setTimeout(type5, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
    }
}

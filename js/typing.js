const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Xin chúc một nửa của thế giới mãi xinh, mãi tươi, mãi trẻ, mãi đẹp."];
const textArray2 = [" Chúc cho những người chị, người em luôn vui vẻ, hạnh phúc, gặp được nhiều may mắn và thành công trong sự nghiệp của mình."];
const textArray3 = [" Chúc mừng ngày quốc tế phụ nữ."];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

let charIndex2 = 0;
let textArrayIndex2 = 0;

let charIndex3 = 0;
let textArrayIndex3 = 0;


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
    }
}

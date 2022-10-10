let elFirstInput = document.querySelector('#input1');
let elSecondInput = document.querySelector('#input2');
let elSelect = document.querySelector('.select');
let elBtn = document.querySelector('#btn');
let elParagraph = document.querySelector('#text');

elBtn.addEventListener("click" , ()=>{
    let answer = eval(elFirstInput.value + elSelect.value + elSecondInput.value);
    elParagraph.textContent = `natija: ${answer}`
})
// javascript code goes here


let x=document.querySelector("#anim-x");
let y=document.querySelector("#anim-y");
let scale=document.querySelector("#anim-scale");
let rotate=document.querySelector("#anim-rotation");
let duration=document.querySelector("#anim-duration");

 let div =document.querySelector("#animation-box");

 function changeHandler(event){
    div.style.transform=`rotate(${rotate.value}deg) translate(${x.value}%, ${-(y.value)}%) scale(${scale.value})`;
    div.style.transition=`all ${duration.value}s ease 0s`;
    changeAllLabels();
};
function changeAllLabels() {
  document.getElementById("anim-x-label").innerHTML = `X: ${x.value}%`;
  document.getElementById("anim-y-label").innerHTML = `Y: ${y.value}%`;
  document.getElementById("anim-scale-label").innerHTML = `Scale: ${scale.value}`;
  document.getElementById("anim-rotation-label").innerHTML = `Rotation: ${rotate.value}deg`;
  document.getElementById("anim-duration-label").innerHTML = `Duration: ${duration.value}s`;
}
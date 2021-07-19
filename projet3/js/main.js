console.log()
//compteur + et -
var plus = document.getElementsByClassName('btn-plus');
var counter = document.getElementsByClassName('counter');
var minus = document.getElementsByClassName('btn-minus');

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function () {
    counter[i].innerText++;
    Total();
  });


  minus[i].addEventListener('click', function () {
    if (counter[i].innerText > 0) counter[i].innerText--;
    Total();
  });
}
// heart icon:changing color
var heartBtn=document.querySelectorAll('.heartBtn');
var heart=document.querySelectorAll('.fa-heart');
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener('click', function () {
if (heart[i].style.color=='red') heart[i].style.color='black'
else heart[i].style.color='red'

  })}
//close icon:remove
var close=document.querySelectorAll('.close');
var card=document.querySelectorAll('.card');
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    card[i].remove()
    Total();
})}
//prix total
function Total (){
var counter = document.querySelectorAll('.counter');
var prixTotal=document.querySelector('.prixTotal');
var prix = document.querySelectorAll('.prix');
var sum=0;
for (let i = 0; i < counter.length; i++) {
     sum+=counter[i].innerText*prix[i].innerText;
}
 prixTotal.innerText = sum;
}


     Total();

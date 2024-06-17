/* // Carousel Auto-Cycle
$(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });
 */

  var btn2024 =document.getElementById("btn2023");
  var btn2023 =document.getElementById("btn2024");
  var body2 =document.getElementById("body2");
  var body3 =document.getElementById("body3");
  btn2024.addEventListener('click',()=>{
      body2.style.display='block';
      body3.style.display='none';
  });
  
  btn2023.addEventListener('click',()=>{
      body2.style.display='none';
      body3.style.display='block';
  });
   

  const btnElList=document.querySelectorAll('.btnew');
  
btnElList.forEach(btnEl => {
  btnEl.addEventListener('click',() => {
    document.querySelector('.special')?.classList.remove('special');
    btnEl.classList.add('special')

  });
});
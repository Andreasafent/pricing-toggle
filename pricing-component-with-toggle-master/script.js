const sliderButton=document.querySelector('.slider');
const checkBox=document.getElementById('checkbox');
const annually=document.querySelectorAll('.annually');
const monthly=document.querySelectorAll('.monthly');

checkBox.addEventListener('click', ()=>{
    
  for(let i=0; i<annually.length; i++)
  
  
      if (checkBox.checked == true) {
        annually[i].style.display = "none";
        monthly[i].style.display = "block";
      } else if (checkBox.checked == false) {
        annually[i].style.display = "block";
        monthly[i].style.display = "none";
      }    
})

 
let con=document.querySelector('#container');
let love=document.querySelector('i');

con.addEventListener('dblclick',function(){

    love.style.transform='translate(-50%,-50%) scale(1)';
  setTimeout(function(){
    love.style.opacity=0.8;
  },1000)
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)';
    
    },2000)
    


})


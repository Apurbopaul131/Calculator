let screen = document.querySelector('input');
let Button = document.querySelectorAll('button');
let screenValue = '';
for(let i = 0;i<Button.length;i++){
    Button[i].addEventListener('click',(e)=>{
       let buttonText = e.target.innerText;
       if(buttonText == 'x'){
           buttonText = '*';
           screenValue = screenValue + buttonText;
           screen.value = screenValue;

       }
       else if(buttonText == 'c'){
           screenValue = '';
           screen.value = screenValue;
       }
       else if(buttonText == '='){
           screen.value = eval(screenValue);
       }
       else{
          screenValue += buttonText;
          screen.value = screenValue;  
       }
    })
}





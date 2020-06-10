const buttons = document.querySelectorAll('button')
const display=document.getElementById('display');
let displayData = "";
buttons.forEach(btn => {
  btn.addEventListener('click', () => { 
    const buttonValue = btn.getAttribute('data-number');
      if(buttonValue===null || (typeof(display.textContent)=== NaN && (buttonValue==='.' || buttonValue==='*' || buttonValue==='-' || buttonValue==='+'|| buttonValue==='/')) || (display.textContent.includes('.') && buttonValue==='.')){
        return
      } else if(display.textContent==='0' && buttonValue !=='.'){
        displayData = buttonValue;
        display.textContent=displayData
      }else if(display.textContent.length===19){
        document.getElementById('demo').textContent='Max!';
        return
      }else {
        displayData += buttonValue;
        display.textContent=displayData
      }
      
  })
})
const equalsButton=document.querySelector('.equal-btn');
equalsButton.addEventListener('click', () => { 
  if(display.textContent==='0'){
    return
  } else{
  displayData = eval(displayData);
  display.textContent = displayData;
  displayData=''
}
})
const clearButton=document.querySelector('.clear-btn');
clearButton.addEventListener('click', () => { 
  displayData = '0';
  display.textContent = displayData;
})
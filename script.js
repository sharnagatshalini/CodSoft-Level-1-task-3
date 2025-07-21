let currentDisplay = '';

function append(value){
  currentDisplay += value;
  document.getElementById('display'). value = currentDisplay;

}
function clearDisplay(){
  currentDisplay = '';
  document.getElementById('display').value = '';
}
function calculate(){
  try{
    currentDisplay = eval(currentDisplay).toString();
    document.getElementById('display').value = currentDisplay;
  }
  catch{
    document.getElementById('display').value = 'Error';
    currentDisplay = '';
  }
}
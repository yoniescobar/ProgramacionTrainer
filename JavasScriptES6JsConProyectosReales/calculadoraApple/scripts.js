function getContentClick(event){
    const value = event.target.innerHTML;
    filterAction(value);
}

const filterAction = value =>{
    value === "0"?addNumberInput(0): null;
    value === "1"?addNumberInput(1): null;
    value === "2"?addNumberInput(2): null;
    value === "3"?addNumberInput(3): null;
    value === "4"?addNumberInput(4): null;
    value === "5"?addNumberInput(5): null;
    value === "6"?addNumberInput(6): null;
    value === "7"?addNumberInput(7): null;
    value === "8"?addNumberInput(8): null;
    value === "9"?addNumberInput(9): null;
    value === ","?addNumberInput(','): null;
}

function addNumberInput(value){
    const inputScreen = document.getElementsByClassName('calculator__screen')[0];
    const inputValue = inputScreen.value;

   if(inputValue==="0"&& inputValue.length ===1 && value!== ","){
       inputScreen.value=value;
       return;
   }
   inputScreen.value = inputValue+value;
   
}
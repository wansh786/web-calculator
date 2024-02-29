document.addEventListener('DOMContentLoaded',function(){
    let inputDisplay=document.getElementById('input')
    let resultDisplay=document.getElementById('result')
    let currentInput=0;

    window.handleButtonClick=function(event){
        const buttonValue=event.target.innerText;
        switch(buttonValue){
            case '=':
                calculateResult()
                break;
            case 'AC':
                clearCalculator()
                break;
            case 'DEL':
                deleteLastInput()
                break;
            default:
                updateInput(buttonValue)
                break;
        }
    }
    function updateInput(value){
        if(currentInput==='0'){
            currentInput=value
        }
        else{
            currentInput+=value
        }
        inputDisplay.innerText=currentInput
    }

    function clearCalculator(){
        currentInput=0;
        inputDisplay.innerText='0'
        resultDisplay.innerText='0'
    }
    function clearCalculator(){
        currentInput='0';
        inputDisplay.innerText='0';
        resultDisplay.innerText='0';

    }
    function deleteLastInput(){
        currentInput=currentInput.slice(0,-1);
        if(currentInput===''){
            currentInput='0'
        }
        inputDisplay.innerText=currentInput;
    }
    function calculateResult(){
        try {
            const result=eval(currentInput)
            if(!isFinite(result)||isNaN(result)){
                throw new error('Invalid operation')
            }
            resultDisplay.innerText=result;
            currentInput='0';
        } catch (error) {
            
        }
    }
    document.addEventListener('keydown',function(e){
        const key=e.key;
        if(key>='0' && key <='9'){
            updateInput(key)
        }
        else if('+-*/.'.includes(key)){
            updateInput(key)
        }
        else if(key==='Enter'){
            calculateResult()
        }
        else if(key==='Escape'){
            clearCalculator
        }
        else if(key==='Backspace'){
            deleteLastInput()
        }
    })
})
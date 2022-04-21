// document.write("sucess")
const inputValue = document.querySelector(".inputNumber")
// inputValue.addEventListener("keydown", runEvent)

const submitBtn = document.querySelector(".submitBtn").addEventListener('click', runSubmit)


function runEvent (e){
console.log(e.target.value);
}

function runSubmit(e){
    console.log(inputValue.value);
    document.querySelector('.inrValue').innerHTML = inputValue.value
    document.querySelector('.usdValue').innerHTML = inputValue.value*0.013
    document.querySelector('.poundValue').innerHTML = inputValue.value*0.010
    document.querySelector('.euroValue').innerHTML = inputValue.value*0.012
}

document.querySelector('.drop').addEventListener('keydown', runChange)
function runChange(){
    console.log(e.target.value)
}
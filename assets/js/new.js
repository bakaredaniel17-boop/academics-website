 function greeting (name){
    console.log("welcome here"+ name)
}
greeting(" Raphael")
const display=document.getElementById("display")
display.value="0"

function append (value) {
    display.value += value
}
function clearDisplay() {
    display.value=""
}
function deleteValue() {
    let sub=display.value
    display.value=sub.slice(0,-1)
}
function calculateResult() {
    display.value=eval(display.value)
}


//  let  amount  ="43210"
//      let round =amount.slice(0,-1)
//      console.log(round)
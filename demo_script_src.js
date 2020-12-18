var onClickValue=0;
var buttonState= false;
 

function randomColors() {
    
    let c ='#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("randomDivColor").style.backgroundColor = c;  
    return c;
}

function myFunction()
{
    onClickValue++;
    let c = randomColors();
    console.log(onClickValue+" times clicked")
    document.getElementById("clickCounter").innerHTML=onClickValue+" "+c;
    buttonState= !buttonState;    
}


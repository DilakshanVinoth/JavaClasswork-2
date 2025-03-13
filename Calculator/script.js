
function add(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let total=num1+num2;
    document.getElementById('tot').innerHTML=total;
}
function subtract(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let total=num1-num2;
    document.getElementById('tot').innerHTML=total;
}
function divide(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let total=num1/num2;
    document.getElementById('tot').innerHTML=total;
}
function multiply(){
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let total=num1*num2;
    document.getElementById('tot').innerHTML=total;
}



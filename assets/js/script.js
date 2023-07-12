   function cambio(){
   let caja =document.getElementById('caja');
 
  if(caja.style.border== "2px solid red")
  {
    caja.style.border= ("none")
  }
  else
  {
    caja.style.border= ("2px solid red")
  } 
 
}



function valor(){
    let valor1=Number(document.getElementById('numero1').value)
    let valor2 = Number(document.getElementById('numero2').value)
    let valor3 = Number (document.getElementById('numero3').value)
    if(valor1>=0 && valor2>=0 && valor3>=0){
    let total= valor1 + valor2 + valor3
    let span=document.querySelector('#resultado')
    
     if(total<=10){
      span.innerHTML="Llevas "+total+" stickers";
    }else{
      span.innerHTML="LLevas Demaciados Stickers";
    }
  } else{
    alert("Dato mal Ingresado, Favor corregir")
  }
}

function valor1(){
  let val1 = document.querySelector("#num1").value;
  let val2 = document.querySelector("#num2").value;
  let val3 = document.querySelector("#num3").value;
  let total1= +val1 +val2 +val3;
  let span1=document.querySelector('#resultado1')
  
  
  if( total1 == 911){

    span1.innerHTML="Password 1 Correcto";

  }else if(total1 == 714){

    span1.innerHTML = "Password 2 Correcto";

  }else{

    span1.innerHTML = "Password Incorrecta";

  }
}
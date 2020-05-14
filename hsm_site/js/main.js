function adicionarUsuario1 () {
     var valor1 = document.getElementById('vl1');
     valor1.style.backgroundColor = "green";
     valor1.innerText = `${valor1.value}R$`;
     

     
     var vr1=document.getElementById('add1');
     vr1.innerHTML = `Você adicionou ${valor1.value}R$`;
     vr1.style.backgroundColor = "green";

     } 
function adicionarUsuario2 () {
     var valor2=document.getElementById('vl2');
      valor2.style.backgroundColor = "green";
      valor2.innerHTML = `${valor2.value}R$`;
    
  


     var vr2=document.getElementById('add2');
     vr2.style.backgroundColor = "green";
     vr2.innerHTML = `Você adicionou ${valor2.value}R$`;
 


    }
function adicionarUsuario3 () { 
     var valor3=document.getElementById('vl3');
     valor3.innerHTML = `${valor3.value}R$`;
     valor3.style.backgroundColor = "green";


     
     var vr3=document.getElementById('add3');
     vr3.innerHTML = `Você adicionou ${valor3.value}R$`
     vr3.style.backgroundColor = "green";

}
     function addEventos(){
     	var a = document.getElementById("vl1");
     	a.addEventListener("click" , adicionarUsuario1);
     	var b = document.getElementById("vl2");
     	b.addEventListener("click" , adicionarUsuario2);
     	var c = document.getElementById("vl3");
     	c.addEventListener("click" , adicionarUsuario3);
     
     window.addEventListener("load",addEventos);
}
     


   
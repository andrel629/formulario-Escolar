const form=document.getElementById("myForm")
    
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        Formulario();
    })

function login() {
    const inputname=document.getElementById("inputname").value
    const inputsenha=document.getElementById("inputsenha").value
  
   

    if (inputname==="" && inputsenha==="") {
        alert("Error")
    } else if(inputsenha.length<3) {
        alert("Senha pequena")
    }else if (inputname=="adm@gmail.com" && inputsenha=="123"){
       alert("Aqui")
        window.location.href='Formulario.html'
        return
    }else{
        alert("Adoletinha")
    }
}
//ola

    

function Formulario() {
    const nome=document.getElementById("nomeAluno")
    const sobrenome=document.getElementById("sobrenomeAluno")
    const email=document.getElementById("emailAluno")
    const number=document.getElementById("idadeAluno")




if(nome===""||sobrenome===""||email===""||number===""){
    window.location.href('https://www.youtube.com/watch?v=H-v4oZ6q8o0')
    console.log("Aqui 22")
}
if(!sexo){
    alert("PAPA")
    return
}

    const escolaridade=document.querySelector("escolaridade").value
    const sexo=document.querySelector("input[name='sexo']:checked").value
    const turno=document.querySelectorAll("input[name=turno]:checked")
}


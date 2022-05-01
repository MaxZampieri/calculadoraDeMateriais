var multiplica = document.querySelector('.btn-calcular');

multiplica.addEventListener("click", function(event){
    event.preventDefault()
    var select = document.querySelector('#options');
    var valor = select.value
    var num2 = document.querySelector("#select-m").value;
    var total = parseInt(num2) / parseInt(valor);

    document.querySelector(".resultado").innerHTML = total.toFixed(2) + " Litros.";
    
})
//Function reset inputs
function resetForm(){
    with (document) {
        getElementById("select-m").value = "";
        resultado.textContent = ""
    }
}
//Function enter keyboard
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      multiplica();
    }
  }, false);

var multiplica = document.querySelector('.btn-calcular');

multiplica.addEventListener("click", function(event){
    event.preventDefault()
    var select = document.querySelector('#options');
    var valor = select.value
    var num2 = document.querySelector("#select-m").value;
    var total = parseInt(num2) / parseInt(valor);

    document.querySelector(".resultado").innerHTML = total.toFixed(2) + " Litros.";
    
})

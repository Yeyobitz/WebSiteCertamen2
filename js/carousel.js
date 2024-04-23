var indice = 0;
mostrarImagenes(indice);

function mover(n) {
    mostrarImagenes(indice += n);
}

function mostrarImagenes(n) {
    var i;
    var x = document.getElementsByClassName("carousel__images")[0].getElementsByTagName("img");
    if (n >= x.length) { indice = 0 }
    if (n < 0) { indice = x.length-1 }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indice].style.display = "block";
}
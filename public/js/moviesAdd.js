window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let moviesAdd = document.querySelector('.moviesAddTitulo');
    let tituloInput = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    var estadoSecreto = 0;

    moviesAdd.onmouseover = function () {
        moviesAdd.style.color = "green";
    }

    moviesAdd.onmouseout = function () {
        moviesAdd.style.color = "initial";
    }

    tituloInput.addEventListener('keydown', function (event) {
        let keyInput = event.key;
        switch (estadoSecreto) {
            case 0:
                keyInput == "s" ? estadoSecreto = 1 : estadoSecreto = 0;
                break;
            case 1:
                keyInput == "e" ? estadoSecreto = 2 : estadoSecreto = 0;
                break;
            case 2:
                keyInput == "c" ? estadoSecreto = 3 : estadoSecreto = 0;
                break;
            case 3:
                keyInput == "r" ? estadoSecreto = 4 : estadoSecreto = 0;
                break;
            case 4:
                keyInput == "e" ? estadoSecreto = 5 : estadoSecreto = 0;
                break;
            case 5:
                keyInput == "t" ? estadoSecreto = 6 : estadoSecreto = 0;
                break;
            case 6:
                keyInput == "o" ? estadoSecreto = 0 : estadoSecreto = 0;
                alert("SECRETO MAGICO");
                break;
            default:
                estadoSecreto = 0;
                break;
        }
    })

}
window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logoDH = document.querySelector('.logoDH');

    logoDH.onmouseover = function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.toggle('fondoMoviesList');
    }

    logoDH.onmouseout = function(){
        body.style.backgroundColor = 'white'
        body.classList.toggle('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}
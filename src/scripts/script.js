let duvidas = document.querySelectorAll('.duvida');

duvidas.forEach(duvida =>{
    duvida.addEventListener('click', () =>{
        duvida.classList.toggle('ativa');
    });
});
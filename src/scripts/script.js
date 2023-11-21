const duvidas = document.querySelectorAll('.duvida');

duvidas.forEach(duvida =>{
    duvida.addEventListener('click', () =>{
        duvida.classList.toggle('ativa');
    });
});

const menu = document.querySelectorAll('.menu');

// menu.forEach(item =>{
//     item.addEventListener('click', () =>{
//         menu.forEach(i =>{
//             i.classList.remove('selected');
//         })
//         item.classList.toggle('selected');
//     });
// });

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', ()=>{
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })
    menu.forEach( item => {
        item.classList.remove('selected');
        if(item.getAttribute('href') == '#'+(current)){
            item.classList.add('selected');
        }
    });
})

// window.addEventListener('scroll' || 'click', ()=>{
//         menu.forEach(a=>{

//         })
// })
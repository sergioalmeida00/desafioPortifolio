const btnMobile = document.querySelector('#btn-mobile');
const ulNav = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');
const titulo = document.querySelector('.introducao p');


// RESPONSAVEL POR FAZER EFEITO typeWrite
function typeWrite(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, index) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 90 * index);
    });

}

// Ao clicar no item do menu, escode o menu
for (const link of links) {
    link.addEventListener('click', () => {
        ulNav.classList.remove('active');
    });
}
// BTN PARA VOLTAR AO TOPO
function topoScroll() {
    const btnTopo = document.querySelector('.topo');
    if (window.scrollY >= 500) {
        btnTopo.classList.add('active');
    } else {
        btnTopo.classList.remove('active');
    }
}

// MUDA A COR DA NAV AO ROLAR O SCROLL;
function headerScroll() {
    const header = document.querySelector('header');
    const navHeight = header.offsetHeight;
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll');
        header.getElementsByClassName.color = 'red';
    }
}

// ADICIONA OU REMOVE A CLASS ACTIVE 
function toggleMenu() {
    const btNav = document.querySelector('.menu-nav ul');
    btNav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);

// API DE AIMAÇÃO DA ScrollReveal, EFEITO NO SCROLL AO ROLAR
const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '50px',
    delay: 375,
    duration: 700,
    // reset: true,
});
scrollReveal.reveal(`
    .introducao-info, .introducao-img,
    #sobre .title, #sobre .sobre-conteudo,
    #projetos .title, #projetos .card,
    #servicos .title, #servicos .card,
    #skills .title, #skills,
    footer .logo, footer .social
`, { interval: 100 });

// FICA ESCUTANDO O EVENTO DE SCROLL E CHAMA AS FUNÇÕES 
window.addEventListener('scroll', () => {
    headerScroll();
    topoScroll();
});
// CHAMADA FUNÇÃO typeWrite
typeWrite(titulo);
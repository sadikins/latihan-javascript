const btn = document.getElementById('btn');
const nav = document.getElementById('navbar');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

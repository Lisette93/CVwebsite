
//Inspiration from a youtube video
document.addEventListener('DOMContentLoaded', () => {
const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show');  
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');  
});
});
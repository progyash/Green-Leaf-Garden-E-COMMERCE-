let text = document.getElementById('text');
let leaf = document.getElementById('C:\Users\kisho\Desktop\Green Leaf Garden (E-COMMERCE)\leaf.png');
let hill1 = document.getElementById('C:\Users\kisho\Desktop\Green Leaf Garden (E-COMMERCE)\hill1.png');
let hill4 = document.getElementById('C:\Users\kisho\Desktop\Green Leaf Garden (E-COMMERCE)\hill4.png');
let hill5 = document.getElementById('C:\Users\kisho\Desktop\Green Leaf Garden (E-COMMERCE)\hill5.png');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.left = value * 1 + 'px';
})
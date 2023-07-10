// #1
/*
const menu = document.querySelector('[data-widget-name]');
console.log(menu.dataset.widgetName);
*/

const links = document.querySelectorAll('[href]');

links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.includes('://') && !href.startsWith('http://internal.com'))
        link.style.color = 'orange';
})
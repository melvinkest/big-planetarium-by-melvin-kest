const toolsBtn = document.getElementById('exploreButton');
const toolsMenu = document.getElementById('exploreMenu');

toolsBtn.addEventListener('click', () => {
    toolsMenu.classList.toggle('active');
    toolsBtn.classList.toggle('active');
    
    const icon = toolsBtn.querySelector('svg');
    if (icon) {
        icon.style.transform = toolsBtn.classList.contains('active') 
            ? 'rotate(180deg)' 
            : 'rotate(0deg)';
        icon.style.transition = 'transform 0.3s ease';
    }
});

window.addEventListener('click', (e) => {
    if (!toolsBtn.contains(e.target) && !toolsMenu.contains(e.target)) {
        toolsMenu.classList.remove('active');
        toolsBtn.classList.remove('active');
    }
});



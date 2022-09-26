const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const colors = document.querySelector('.colors')
const color1 = document.querySelector('.color1')
const show = document.querySelector('.show')
const showed = document.querySelector('.showed')

// Event listener

closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open'))
    {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
        colors.classList.add('colors');
        color1.classList.remove('color1');
        showed.classList.add('show')
        show.classList.remove('show')
 
    }
});

openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed'))
    {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
        color1.classList.add('color1');
        colors.classList.remove('colors')    
        show.classList.add('show')
        showed.classList.remove('show')   
    }
});

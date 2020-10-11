const setting = document.querySelector('.setting-btns');
const backdrop = document.querySelector('.backdrop-popup');
const popup = document.querySelector('.popup');




setting.addEventListener('click', ()=>{
    backdrop.classList.add('active');
    popup.classList.add('active');
})

backdrop.addEventListener('click', () => {
    backdrop.classList.remove('active');
    popup.classList.remove('active')
})
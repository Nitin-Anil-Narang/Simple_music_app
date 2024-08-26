function removeTrans(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')   
}

function playSound(e){ 
    const audios = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audios) return;
    btn.classList.add('playing');
    audios.currentTime = 0;
    audios.play();
}

const btns = document.querySelectorAll('.key');
btns.forEach(btn => btn.addEventListener('transitionend',removeTrans));
window.addEventListener('keydown',playSound);



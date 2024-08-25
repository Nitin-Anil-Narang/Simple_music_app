function playSound(e){
    const audios = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audios.play()
}

window.addEventListener('keydown',playSound);
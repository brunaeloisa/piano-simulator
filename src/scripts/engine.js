const pianoKeys = document.querySelectorAll('.piano-keys .key');
const keyList = Array.from(pianoKeys).map((keyElement) => keyElement.dataset.key);
const volumeSlider = document.querySelector('.volume-slider input');
const toggleKeys = document.querySelector('.keys-check input');
let sound = new Audio(`./src/tunes/a.wav`);

function playSound(key) {
  sound.src = `./src/tunes/${key}.wav`;
  sound.play();
}

pianoKeys.forEach(key => {
  key.addEventListener('click', () => {
    playSound(key.dataset.key);
  });
});

document.addEventListener('keydown', (event) => {
  if (keyList.includes(event.key)) {
    playSound(event.key);

    const pressedKey = document.querySelector(`[data-key=${event.key}]`);
    pressedKey.classList.add('active');
    setTimeout(() => {
      pressedKey.classList.remove('active');
    }, 150);
  }
});

volumeSlider.addEventListener('input', () => {
  sound.volume = Number(volumeSlider.value) / 100;
});

toggleKeys.addEventListener('click', () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
});


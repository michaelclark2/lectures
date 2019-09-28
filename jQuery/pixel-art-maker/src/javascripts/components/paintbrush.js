const paintColor = 'blue';

const paintPixel = (e) => {
  const pixel = e.target;
  pixel.style.backgroundColor = paintColor;
}

const attachEvent = () => {
  $(document.body).on('mousedown', 'td', paintPixel);
}

export default {attachEvent}
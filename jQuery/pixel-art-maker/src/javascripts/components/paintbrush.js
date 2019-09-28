import utils from "../helpers/utils";

const paintColor = ['blue', 'red', 'green', 'orange', 'black', 'chartreuse'];

const paintPixel = (e) => {
  const pixel = e.target;
  const fillColor = $('.color-choice:checked').val();
  pixel.style.backgroundColor = fillColor;
}

const printColorPicker = () => {
  let domString = '';
  paintColor.forEach(color => {
    domString += `
    <div class="form-check form-check-inline">
      <input class="color-choice" type="radio" name="colorPicker" id="${color}Choice" value="${color}">
      <label class="form-check-label" for="${color}Choice">${color}</label>
    </div>
    `;
  });
  utils.printToDom('color-picker', domString);

}

const attachEvents = () => {
  $(document.body).on('mousedown', 'td', paintPixel);
}

export default {attachEvents, printColorPicker}
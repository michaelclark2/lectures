import utils from '../helpers/utils';

const makeGrid = (rows = 1, columns = 1) => {
  let domString = '<table>';
  for (let c = 0; c < columns; c++) {
    domString += '<tr>';
    for (let r = 0; r < rows; r++) {
      domString += '<td></td>';
    }
    domString += '</tr>';
  }
  domString += '</table>';

  utils.printToDom('grid', domString);
}

export default {makeGrid}
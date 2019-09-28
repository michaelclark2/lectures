import grid from '../javascripts/components/grid';
import paintbrush from '../javascripts/components/paintbrush';
import '../styles/main.scss';

const init = () => {
  grid.makeGrid(25,25);
  paintbrush.attachEvent();
}

init();

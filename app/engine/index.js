import Pencil from './arc/pencil';
import Eraser from './arc/eraser';

export default {
  Pencil: (canvas, device) => new Pencil(canvas, device),
  Eraser: (canvas, device) => new Eraser(canvas, device),
};

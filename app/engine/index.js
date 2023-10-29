import Pencil from "./arc/pencil";
import Eraser from "./arc/eraser";

export default  {
  pencil: (canvas,device)=>new Pencil(canvas,device),
  eraser: (canvas,device)=>new Eraser(canvas,device)
}

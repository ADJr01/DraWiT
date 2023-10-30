export default  class StrokeRecord{

  /*
  * Stroke Record is a cache for strokes may be required for upcoming features like eraser, coloring etc.
  * stroC: stands for stroke cache is a object that holds the strokes data:
  *       * x: coordinate x
  *       * y: coordinate y
  *       * canvas width
  *       * canvas height
  */
  constructor() {
    this.strokeCache = [];
  }
  createStroC(x, y, w, h){
    const StroC =  {
      x: x,
      y: y,
      width: w,
      height: h
    }
    return _=>{
      this.insertStroke(StroC)
    }
  }
  insertStroke(stroc){
    const {x,y,width,height} = stroc;
    if(!x || !y || !width || !height){
      throw new Error("Engine:Cache:StrokeRecord:onInsertStroke::=> missing required parameters");//Engine:Pencil:onCreate::=> canvas is not defined
    }
    this.strokeCache.push(stroc);
  }
  removeLastStroke(){

  }

  getAllStrokes(){

  }
}

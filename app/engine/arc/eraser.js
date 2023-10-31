import {getCoords} from "./helper/util";

export default class Eraser{
  'use strict';
  constructor(canvas,device) {
    this.Device = device;
    this.Canvas = canvas;
    this.Ctx = this.Canvas.getContext('2d');
    this.isClicked = false
  }

  onCreate(){
    //listen to events and create all related processing
    if(!this.Canvas ) throw new Error('Engine:Pencil:onCreate::=> canvas is not defined');
    if(this.Device==='mouse') {
      this.Canvas.addEventListener('mousedown', e => this.onMousePress(e));
      this.Canvas.addEventListener('mousemove', e => this.onEraserMove(e));
      this.Canvas.addEventListener('mouseup', e => this.onMouseRelease(e));
      this.Canvas.addEventListener('mouseout',e=>this.onMouseRelease(e));
      this.Canvas.addEventListener('contextMenu',e=>this.onMouseRelease(e));
    }

  }
  onMousePress(event){
    if(!this.Canvas)return;
    this.isClicked = true;
  }
  onEraserMove(event){
    if(!this.Canvas || !this.isClicked) return;
    const {x,y} = getCoords(event,this.Canvas);
    this.Ctx.clearRect(x,y,this.Canvas.width,this.Canvas.height);
  }
  onMouseRelease(event){
    if(!this.Canvas)return;
    this.isClicked = false;
  }


  onDestroy(){
    //remove event listeners
    if(!this.Canvas ) return  -1;
    if(this.Device==='mouse') {
      this.Canvas.removeEventListener('mousedown', e => this.onMousePress(e));
      this.Canvas.removeEventListener('mousemove', e => this.onEraserMove(e));
      this.Canvas.removeEventListener('mouseup', e => this.onMouseRelease(e));
      this.Canvas.removeEventListener('mouseout',e=>this.onMouseRelease(e));
      this.Canvas.removeEventListener('contextMenu',e=>this.onMouseRelease(e));
    }
    this.Canvas = null;
    return null;
  }
}

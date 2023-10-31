import {getCoords} from "./helper/util";

export default class Pencil{
  'use strict';
  constructor(canvas,device) {
    this.Device = device;
    this.Canvas = canvas;
    this.Ctx = this.Canvas.getContext('2d');
    this.isClicked = false
  }
  canvasOnClick(event){
    if(!this.Canvas)return
    this.isClicked = true;
    this.Ctx.beginPath();
    const {x,y} = getCoords(event,this.Canvas);
    this.Ctx.moveTo(x,y);
  }
  canvasOnClickRelease(){
    if(!this.Canvas)return
    this.isClicked = false;
    this.Ctx.closePath();
  }
  canvasOnMouseMove(event){
    if(!this.isClicked || !this.Canvas) return;
    const {x,y} = getCoords(event,this.Canvas);
    this.Ctx.lineTo(x,y);
    this.Ctx.strokeStyle = '#ffffff';
    this.Ctx.lineCap = 'round';
    this.Ctx.lineJoin = 'round';
    this.Ctx.lineWidth = '1';
    this.Ctx.stroke();
  }

  onCreate(){
    //listen to events and create all related processing
    if(!this.Canvas ) throw new Error('Engine:Pencil:onCreate::=> canvas is not defined');
    if(this.Device==='mouse'){
      this.Canvas.addEventListener('mousedown',e=>this.canvasOnClick(e));
      this.Canvas.addEventListener('mousemove',e=>this.canvasOnMouseMove(e));
      this.Canvas.addEventListener('mouseup',e=>this.canvasOnClickRelease(e));
      this.Canvas.addEventListener('mouseout',e=>this.canvasOnClickRelease(e));
      this.Canvas.addEventListener('contextMenu',e=>this.canvasOnClickRelease(e));
    }


  }


  onDestroy(){
    //remove event listeners
    if(!this.Canvas ) return  -1;
    if(this.Device==='mouse') {
      this.Canvas.removeEventListener('mousedown', e => this.canvasOnClick(e));
      this.Canvas.removeEventListener('mousemove', e => this.canvasOnMouseMove(e));
      this.Canvas.removeEventListener('mouseup', e => this.canvasOnClickRelease(e));
      this.Canvas.removeEventListener('mouseout',e=>this.canvasOnClickRelease(e));
      this.Canvas.removeEventListener('contextMenu',e=>this.canvasOnClickRelease(e));
    }
    this.Canvas = null;
    return null;
  }
}

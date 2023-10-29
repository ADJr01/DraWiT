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
    this.isClicked = true;
    this.Ctx.beginPath();
    const {x,y} = getCoords(event,this.Canvas);
    this.Ctx.moveTo(x,y);
  }
  canvasOnClickRelease(){
    this.isClicked = false;
    this.Ctx.closePath();
  }
  canvasOnMouseMove(event){
    if(!this.isClicked) return;
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
      this.Canvas.addEventListener('click',e=>this.canvasOnClick(e));
      this.Canvas.addEventListener('mousemove',e=>this.canvasOnMouseMove(e));
      this.Canvas.addEventListener('mouseup',e=>this.canvasOnClickRelease(e));
    }


  }


  onDestroy(){
    //remove event listeners
    if(!this.Canvas ) return  -1;
    if(this.Device==='mouse') {
      this.Canvas.removeEventListener('click', e => this.canvasOnClick(e));
      this.Canvas.removeEventListener('mousemove', e => this.canvasOnMouseMove(e));
      this.Canvas.removeEventListener('mouseup', e => this.canvasOnClickRelease(e));

      return null;
    }
  }
}
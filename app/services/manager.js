import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import engine from "../engine";
export default class ManagerService extends Service {
  @tracked boardEngine = engine;
  @tracked board_config = {
    deviceType: '',
    boardWidth:0,
    boardHeight:0,
    toolPanelWidth: 0,
    toolPanelHeight: 0,
    toolSet: [[{
      name: 'Pencil',
      icon: 'pencil.svg',
    },
      {
      name: 'Eraser',
      icon: 'eraser.svg',
    }]],
    selectedTool: 'Pencil',
  };
  @tracked selectedTool = null;
  @tracked board = null;

  @action
  async __init__(board) {
    this.board = board;
    this.board.style.cursor = `url('/asset/pencil.svg'), pointer;`;
    this.startDrawingEngine();
  }

  @action startDrawingEngine(){
    const tool = this.board_config.selectedTool;
    this.selectedTool = this.boardEngine[tool];
    if(this.selectedTool){
      this.selectedTool = this.selectedTool(this.board,this.board_config.deviceType);
      this.selectedTool.onCreate();
    }
  }
  @action switchDrawingTool(tool){
    this.selectedTool && this.selectedTool.onDestroy();
    this.selectedTool = null;
    set(this.board_config, 'selectedTool',tool)
    this.startDrawingEngine();

  }
  @action stopDrawingEngine(){

  }

}

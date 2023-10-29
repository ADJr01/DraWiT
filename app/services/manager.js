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
      name: 'pencil',
      icon: 'pencil.svg',
      event:{

      }
    },
      {
      name: 'Eraser',
      icon: 'eraser.svg',
      event:{

      }
    }]],
    selectedTool: 'pencil',
  };

}

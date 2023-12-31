import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
export default class BoardComponent extends Component {
  @service manager;
  @tracked board = null;

  @action detectDevice() {
    // Check if the device supports touch events
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    // Check if the device supports mouse events
    const isMouseDevice = 'onmousemove' in window;

    if (isTouchDevice) {
      set(this.manager.board_config, 'deviceType', 'touch');
    } else if (isMouseDevice) {
      set(this.manager.board_config, 'deviceType', 'mouse');
    } else {
      throw new Error(
        'BoardComponent::detectDevice::=> device detection failed.device is not supported'
      );
    }
    return true;
  }

  @action initDrawer(board) {
    const device = this.detectDevice();
    if (!device) {
      board = null;
      document.removeChild(document.getElementsByTagName('body')[0]);
      return -1;
    }
    this.board = board;
    this.onResize();
    this.manager.__init__(this.board);
    window.addEventListener('resize', (_) => this.onResize());
  }
  @action onSwitchTool(tool) {
    this.manager.switchDrawingTool(tool);
  }

  @action onResize() {
    const TotalWidth = window.innerWidth;
    const TotalHeight = window.innerHeight;
    //set board canvas width to 80% of total width
    const boardWidth = TotalWidth * 0.8;
    //set board canvas height to 100% of total height
    const boardHeight = TotalHeight;
    //set tool panel width to 20% of total width
    const toolPanelWidth = TotalWidth * 0.2;
    //set tool panel height to 100% of total height
    const toolPanelHeight = TotalHeight;
    set(this.manager.board_config, 'boardWidth', boardWidth);
    set(this.manager.board_config, 'boardHeight', boardHeight);
    set(this.manager.board_config, 'toolPanelWidth', toolPanelWidth);
    set(this.manager.board_config, 'toolPanelHeight', toolPanelHeight);
    this.board.width = this.manager.board_config.boardWidth;
    this.board.height = this.manager.board_config.boardHeight;
  }

  get ToolsSet() {
    function createSubArrays(arr) {
      const result = [];

      for (let i = 0; i < arr.length; i += 2) {
        const subArray = [arr[i], arr[i + 1]].filter(Boolean); // filter out undefined for odd-length arrays
        result.push(subArray);
      }

      return result;
    }
    return createSubArrays(this.manager.board_config.toolSet);
  }
}

import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action, set } from '@ember/object';
export default class ToolsetPropColorComponent extends Component {
  @tracked showPicker = false;
  @tracked pickedColor = this.args.color || '#de0e75';
  @tracked mainPicker = null;
  @action switchColorPicker(){
    this.showPicker = !this.showPicker;
  }
  @action openPicker(elem){
    this.mainPicker = elem;
  }
}

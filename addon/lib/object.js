import Component from '@glimmer/component';
import { isNone } from '@ember/utils';
import { fabric } from 'fabric';

export default class FabricObject extends Component {
  constructor() {
    super(...arguments);

    if (isNone(this.canvas)) {
      throw new Error('The Fabric object must set the canvas attribute.');
    }

    // Create the Fabric object.
    this._object = this.createObject(fabric);

    // Add the object to the canvas so it becomes part of its lifecycle.
    this.canvas.add(this);
  }

  get options() {
    const options = {
      left: this.args.left,
      top: this.args.top,
      right: this.args.right,
      bottom: this.args.bottom,
      fill: this.args.fill,
      width: this.args.width,
      height: this.args.height,
      opacity: this.args.opacity,
      stroke: this.args.stroke,
      strokeDashArray: this.args.strokeDashArray,
      strokeDashOffset: this.args.strokeDashOffset,
      strokeWidth: this.args.strokeWidth || 1,
      scaleX: this.args.scaleX || 1,
      scaleY: this.args.scaleY || 1,
      angle: this.args.angle,
      flipX: this.args.flipX,
      flipY: this.args.flipY,
      skewX: this.args.skewX,
      skewY: this.args.skewY,
    };

    return options;
  }

  willDestroy() {
    super.willDestroy();

    // Remove this object from the canvas.
    this.canvas.remove(this);
  }

  get canvas() {
    return this.args.canvas;
  }

  get object() {
    return this._object;
  }
}
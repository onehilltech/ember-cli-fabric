import FabricObject from '../../lib/object';

export default class FabricTextComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Text(this.args.text ?? '', this.options);
  }

  get options() {
    return Object.assign(
      super.options,
      FabricObject.compactOptions({
        fontFamily: this.args.fontFamily,
        fontSize: this.args.fontSize,
        fontStyle: this.args.fontStyle,
        fontWeight: this.args.fontWeight,
        underline: this.args.underline,
        linethrough: this.args.linethrough,
        overline: this.args.overline,
        shadow: this.args.shadow,
        textAlign: this.args.textAlign,
        textBackgroundColor: this.args.textBackgroundColor,
        lineHeight: this.args.lineHeight,
      })
    );
  }
}

import { JSX as CustomJSX } from '@a-safe-digital/typed-html/elements'

declare global {
  namespace JSX {
    interface CustomElement {
        ACustomAttr: string;
        customLIAttr: string;
    }
    interface IntrinsicElements extends CustomJSX.IntrinsicElements {
      customElement: CustomElement;
    }
  }
}

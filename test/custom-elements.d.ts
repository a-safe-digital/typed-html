import '@a-safe-digital/typed-html/jsx-runtime'

declare module '@a-safe-digital/typed-html/jsx-runtime' {
  export namespace JSX {
      interface CustomElement {
          ACustomAttr: string;
          customLIAttr: string;
      }

      interface IntrinsicElements {
          customElement: CustomElement;
      }
  }
}

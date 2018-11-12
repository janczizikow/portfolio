// @flow

declare module 'typography' {
  // declare interface BaseLine {
  //   fontSize: string;
  //   lineHeight: string;
  // }
  declare type GoogleFont = {
    name: string,
    styles: string[],
  };

  declare type VerticalRhythm = {
    rhythm: (value: number) => string,
    scale: (value: number) => Object,
    adjustFontSizeTo: (value?: number | string) => Object,
    // linesForFontSize: (fontSize: number) => number,
    // establishBaseline: () => BaseLine,
  };

  declare type TypographyOptions = {
    baseFontSize?: string,
    baseLineHeight?: number,
    scaleRatio?: number,
    googleFonts?: GoogleFont[],
    headerFontFamily?: string[],
    bodyFontFamily?: string[],
    headerColor?: string,
    bodyColor?: string,
    headerWeight?: number | string,
    bodyWeight?: number | string,
    boldWeight?: number | string,
    blockMarginBottom?: number,
    includeNormalize?: boolean,
    overrideStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: mixed
    ) => Object,
    overrideThemeStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: mixed
    ) => Object,
    plugins?: mixed[],
  };

  declare class Typography {
    constructor(opts?: TypographyOptions): Typography;
    options: TypographyOptions;
    createStyles(): string;
    toJSON(): Object;
    injectStyles(): void;
  }

  declare export default typeof Typography;
}

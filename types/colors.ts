export type Color = {
  colorName: string;
  hexCode: string;
};

export type Palette = {
  id: number;
  paletteName: string;
  colors: Color[];
};

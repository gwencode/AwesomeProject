export type Color = {
  colorName: string;
  hexCode: string;
  selected?: boolean;
};

export type Palette = {
  id?: number;
  paletteName: string;
  colors: Color[];
};

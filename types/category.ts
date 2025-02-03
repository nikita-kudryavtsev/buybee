enum ICON_TYPES {
  PLUG = 'plug',
  RING = 'ring',
  BED = 'bed',
  PERCENT = 'percent',
  HOME = 'home',
  SHIRT = 'shirt',
  BABY = 'baby',
  PLAIN = 'plain'
}

type icon_type =
  ICON_TYPES.BED
  | ICON_TYPES.PLUG
  | ICON_TYPES.RING
  | ICON_TYPES.PERCENT
  | ICON_TYPES.HOME
  | ICON_TYPES.BABY
  | ICON_TYPES.SHIRT
  | ICON_TYPES.PLAIN

export interface ICategory {
  id: string;
  name: string;
  display: string;
  url: string;
  icon: icon_type;
  // product: any;
  productGroups: string
}
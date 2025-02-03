import { BabyIcon, PlaneIcon, BellRingIcon, HomeIcon, PlugIcon, ShirtIcon, PercentIcon, BedIcon } from "lucide-vue-next";
import type { ICategory } from "~/types/category";

export default function (iconName: ICategory['icon']) {
  switch (iconName) {
    case 'baby': return BabyIcon;
    case 'plain': return PlaneIcon;
    case 'ring': return BellRingIcon;
    case 'home': return HomeIcon;
    case 'plug': return PlugIcon;
    case 'shirt': return ShirtIcon;
    case 'percent': return PercentIcon;
    case 'bed': return BedIcon;
  }
}
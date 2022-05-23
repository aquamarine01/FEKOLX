import Diamond from "./Diamond";
import Electronics from "./Electronic";
import MenClothing from "./MenClothing";
import WomenClothing from "./WomenClothing";
import { CATEGORY } from "utils/constant";
import { FontAwesomeProps } from "utils/interface";

const CategoryIcon = ({ category, ...props }: Props) => {
  const getIcons = () => {
    switch (category) {
      case CATEGORY.ELECTRONICS:
        return <Electronics {...props} />;

      case CATEGORY.JEWELERY:
        return <Diamond {...props} />;

      case CATEGORY.MEN_CLOTHING:
        return <MenClothing {...props} />;

      case CATEGORY.WOMEN_CLOTHING:
        return <WomenClothing {...props} />;
    }
  };

  return getIcons();
};

type Props = FontAwesomeProps & {
  category: typeof CATEGORY[keyof typeof CATEGORY];
};

export default CategoryIcon;

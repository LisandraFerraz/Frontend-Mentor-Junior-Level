import snappy from "./../../assets/icons/icon-snappy-process.svg";
import affordable from "./../../assets/icons/icon-affordable-prices.svg";
import people from "./../../assets/icons/icon-people-first.svg";

import "./caracteristics-styles.scss";
import { CaracteristicsItem } from "./Items";
import { ItemsList } from "./../../utils/items-list";

export const Caracteristics = () => {
  return (
    <div className="container">
      <div className="container__title">
        <div className="container__title__line"></div>
        <h1>We're different</h1>
      </div>
      <div className="container__itemsGroup">
        {ItemsList.map((e) => {
          return (
            <CaracteristicsItem
              icon={e.icon}
              itemName={e.itemName}
              itemDesc={e.itemDesc}
            />
          );
        })}
      </div>
    </div>
  );
};

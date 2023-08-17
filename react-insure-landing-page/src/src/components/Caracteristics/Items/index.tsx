import { useEffect, useState } from "react";
import "./items-styles.scss";

interface Props {
  icon?: string | any;
  itemName?: string;
  itemDesc?: string;
}

export const CaracteristicsItem = (props: Props) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const addIcon = async () => {
      const { default: importIcon } = await import(
        `./../../../assets/icons/${props.icon}`
      );
      setIcon(importIcon);
    };
    addIcon();
  }, []);

  return (
    <div className="caracItem">
      {/* <img src={img} alt={props.itemName} /> */}
      <img src={icon} alt={props.itemName} />
      <h4>{props.itemName}</h4>
      <p>{props.itemDesc}</p>
    </div>
  );
};

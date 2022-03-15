import React from "react";
import dynamic from "next/dynamic";
const AdvertisingDataItemOption = dynamic(() => import("./AdvertisingDataItemOption"));

interface Props {
  title: string;
  description: string;
  id: string;
  items: any;
}

const AdvertisingDataItem: React.FC<Props> = ({
  id,
  title,
  description,
  items,
}) => {
  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>

      {items.map((item: any, key: any) => {
        return (
          <AdvertisingDataItemOption
            key={key}
            title={item.title}
            description={item.description}
            defaultValue={item.defaultValue}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default AdvertisingDataItem;

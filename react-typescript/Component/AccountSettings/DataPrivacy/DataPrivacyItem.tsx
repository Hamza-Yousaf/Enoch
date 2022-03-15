import React from "react";
import dynamic from "next/dynamic";
const DataPrivacyItemOption = dynamic(() => import("./DataPrivacyItemOption"));

interface Props {
  title: string;
  description: string;
  id: string;
  items: any;
}

const DataPrivacyItem: React.FC<Props> = ({
  title,
  id,
  description,
  items,
}) => {
  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      {items.map((item: any, key: any) => {
        return (
          <DataPrivacyItemOption
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

export default DataPrivacyItem;

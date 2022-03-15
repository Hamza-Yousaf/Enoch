import React from "react";
import dynamic from "next/dynamic";
const CommunicationsItemOption = dynamic(() => import("./CommunicationsItemOption"));

interface Props {
  title: any;
  description: any;
  id: any;
  items: any;
}

const CommunicationsItem: React.FC<Props> = ({
  title,
  description,
  id,
  items,
}) => {
  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      {items.map((item: any, key: any) => {
        return (
          <CommunicationsItemOption
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

export default CommunicationsItem;

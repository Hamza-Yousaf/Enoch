import React from "react";
import dynamic from "next/dynamic";
const VisibilityItemOption = dynamic(() => import("../Visibility/VisibilityItemOption"));


interface Props {
  title: string;
  description: string;
  id: string;
  items: any;
}

const VisibilityItems: React.FC<Props> = ({
  description,
  id,
  title,
  items,
}) => {
  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>
      {items.map((item: any, key: any) => {
        return (
          <VisibilityItemOption
            key={key}
            title={item.title}
            description={item.description}
            question={item.question}
            inputType={item.inputType}
            inputOptions={item.inputOptions}
            extraBlock={item.extraBlock}
            defaultValue={item.defaultValue}
          />
        );
      })}
    </div>
  );
};

export default VisibilityItems;

import React from "react";
import { log } from "console";
import { Good } from "../types/good";
import { GoodCard } from "./GoodCard";
import GoodCardC from "../legacy_components/GoodCardC";

type Props = {
  goods: Good[];
  onDelete?: (goodId: number) => void;
  onUpdate?: (good: Good) => void;
};

const Component =  ({
  goods,
  onDelete = () => {},
  onUpdate = () => {},
}: Props) => {

  console.log('Render GoodsList component');
  
  return (
    <div className="GoodList">
      {goods.map((good) => (
        <article key={good.id} className="GoodCard">
          <GoodCardC good={good} onDelete={onDelete} onUpdate={onUpdate} />
        </article>
      ))}
    </div>
  );
};
                                                  // areEqual ???
export const GoodsList = React.memo(Component
  /*,(prevProps, nextProps)=>{
  // prevProps.goods equal nextProps.goods
  const arrStrPrev = JSON.stringify(prevProps.goods);
  const arrStrNext = JSON.stringify(nextProps.goods);
  //console.log(arrStrPrev);
  //console.log(arrStrNext);
  return arrStrPrev === arrStrNext;
}*/
);
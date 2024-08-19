import React, { useContext } from "react";
import { log } from "console";
import { Good } from "../types/good";
import { GoodCard } from "./GoodCard";
import GoodCardC from "../legacy_components/GoodCardC";
import { GoodsContext } from "../GoodsContext";

// function component
const Component =  () => {
  const goods = useContext(GoodsContext);
  
  console.log('Render GoodsList component');
  // JSX
  return (
    <div className="GoodList">
      {goods.map((good) => (
        <article key={good.id} className="GoodCard">
          <GoodCard good={good}/>
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
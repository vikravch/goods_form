import React, { PropsWithChildren, useState, useEffect } from "react";
import { Good } from "./types";
import { goodsFromServer } from "./api/goods";
import { getColorById } from "./utils/colors";

const getInitialGoods = () => {
    const resultList = goodsFromServer.map((good) => ({
        ...good,
        color: getColorById(good.colorId),
      }));
      
    return resultList;  
}
                            //                context type    init value
export const GoodsContext = React.createContext<  Good[]   >(
    [] as Good[]);

type GoodMethods = {
    addGood: (good: Good) => void;
    updateGood: (good: Good) => void;
    deleteGood: (goodId: number) => void;
};

export const GoodsMethodsContext = React.createContext<GoodMethods>({
    addGood: () => {},
    updateGood: () => {},
    deleteGood: () => {},
});

type Props = {
    children: React.ReactNode
}

export const GoodsContextWrapper = ({children}: PropsWithChildren) => {

  const [goods, setGoods] = useState<Good[]>([]);

  useEffect(
    ()=>{
      const goodsWithColors: Good[] = goodsFromServer.map((good) => ({
        ...good,
        color: getColorById(good.colorId),
      }));
      setGoods(goodsWithColors);
    }, 
    [] // empty for componentDidMount
  );

  const addGood = (newGood: Good) => {
    setGoods([...goods, newGood]);
  }
  const deleteGood = (goodId: number) => {
    setGoods(currGoods => currGoods.filter(good => good.id !== goodId));
  };
  const updateGood = ( updatedGood: Good )=>{
    console.log(updatedGood);
    setGoods(
      goods.map(good => {
        if(good.id === updatedGood.id){
          return updatedGood;
        } else {
          return good;
        }
      })
    )
  };
  
    return (
        <GoodsContext.Provider value={goods}>
            <GoodsMethodsContext.Provider value={{
                addGood, deleteGood, updateGood
            }}>
                {children}
            </GoodsMethodsContext.Provider>
        </GoodsContext.Provider>    
    )
}
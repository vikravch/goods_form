import { useState } from "react";
import "./App.css";
import { GoodsList } from "./components/GoodsList";
import { Good } from "./types";
import { GoodsForm } from "./components/GoodsForm";
import { getColorById } from "./utils/colors";
const goodsFromServer = [
  { id: 1, colorId: 1, name: "Dumplings" },
  { id: 2, colorId: 2, name: "Carrot" },
  { id: 3, colorId: 3, name: "Eggs" },
  { id: 4, colorId: 1, name: "Ice cream" },
  { id: 5, colorId: 2, name: "Apple" },
  { id: 6, colorId: 3, name: "Bread" },
  { id: 7, colorId: 1, name: "Fish" },
  { id: 8, colorId: 2, name: "Honey" },
  { id: 9, colorId: 3, name: "Jam" },
  { id: 10, colorId: 1, name: "Garlic" },
];

const goodsWithColors: Good[] = goodsFromServer.map((good) => ({
  ...good,
  color: getColorById(good.colorId),
}));

const App: React.FC = () => {
  const [goods, setGoods] = useState(goodsWithColors);

  const handleFormSubmit = (newGood: Good) => {
    setGoods([...goods, newGood]);
  }
  const deleteGood = ( goodId: number )=>{
    setGoods(goods.filter(good => good.id !== goodId));
  }
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
  }

  return (
    <div className="App">
      <h1>Goods</h1>
      <GoodsList goods={goods} onDelete={deleteGood} onUpdate={updateGood} />
      <GoodsForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;

// serialization

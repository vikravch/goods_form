import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { GoodsList } from "./components/GoodsList";
import { Good } from "./types";
import { GoodsForm } from "./components/GoodsForm";
import React, { ReactNode } from "react";
import { GoodsContextWrapper } from "./GoodsContext";
import { AddGoodForm } from "./components/AddGoodForm";

const App: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const [userName, setUserName] = useState("");

  let oldVersionOfGoods = useRef<Good[]>([]);
  //let oldVersionOfGoods: Good[] = [];

  //console.log('Is new array - ', oldVersionOfGoods.current !== goods);
  //oldVersionOfGoods.current = goods;

  return (
    <div className="App">
      <h1>Goods</h1>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        value={userName}
        placeholder="user name"
      />
      <input
        type="text"
        onChange={(event) => {
          setFilterQuery(event.target.value);
        }}
        value={filterQuery}
        placeholder="filter"
      />
      <AddGoodForm />
      <GoodsList />
    </div>
  );
};

export default App;

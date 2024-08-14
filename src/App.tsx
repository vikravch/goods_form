import { useCallback, useRef, useState } from "react";
import "./App.css";
import { GoodsList } from "./components/GoodsList";
import { Good } from "./types";
import { GoodsForm } from "./components/GoodsForm";
import { getColorById } from "./utils/colors";
import React, { ReactNode } from "react";

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

/*const App: React.FC = () => {
  const [goods, setGoods] = useState(goodsWithColors);
  const [filterQuery, setFilterQuery] = useState('');
  const [userName, setUserName] = useState('');

  const handleFormSubmit = (newGood: Good) => {
    setGoods([...goods, newGood]);
  }
  let oldVersionOfGoods = useRef<Good[]>([]);
  //let oldVersionOfGoods: Good[] = [];
  
  console.log('Is new array - ', oldVersionOfGoods.current !== goods);
  oldVersionOfGoods.current = goods;
  

  const deleteGood = useCallback((goodId: number) => {
    setGoods(currGoods => currGoods.filter(good => good.id !== goodId));
  }, []);

  const updateGood = useCallback( ( updatedGood: Good )=>{
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
  }, [goods]);
  //const filteredGoods = goods.filter(good=>good.name.includes(filterQuery));

  return (
    <div className="App">
      <h1>Goods</h1>
      <input 
        type='text' 
        onChange={(event)=>{setUserName(event.target.value)}} 
        value={userName} 
        placeholder="user name"
      />

      <input 
        type='text' 
        onChange={(event)=>{setFilterQuery(event.target.value)}} 
        value={filterQuery}
        placeholder="filter"
        />
      <GoodsForm onSubmit={handleFormSubmit} />
      <GoodsList goods={goods} onDelete={deleteGood} onUpdate={updateGood}/>
    </div>
  );
};*/

type State = {
  goods: Good[],
  filterQuery: string,
  userName: string
}

class App extends React.Component<unknown, State>{

  state: Readonly<State> = {
    goods: goodsWithColors,
    filterQuery: '',
    userName: ''
  }

  handleFormSubmit = (newGood: Good) => {
    this.setState({
      ...this.state, 
      goods: [...this.state.goods, newGood]
    });
  }
  deleteGood = (goodId: number) => {
    this.setState({
      ...this.state, 
      goods: this.state.goods.filter(good => good.id !== goodId)
    } );
  };

  updateGood = ( updatedGood: Good )=>{
    console.log(updatedGood);
    this.setState(
      {
        ...this.state,
        goods: this.state.goods.map(good => {
          if(good.id === updatedGood.id){
            return updatedGood;
          } else {
            return good;
          }
        })
      }
    )
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>Goods</h1>
        <input 
          type='text' 
          onChange={(event)=>{this.setState({userName: event.target.value})}} 
          value={this.state.userName} 
          placeholder="user name"
        />
  
        <input 
          type='text' 
          onChange={(event)=>{this.setState({filterQuery: event.target.value})}} 
          value={this.state.filterQuery}
          placeholder="filter"
          />
        <GoodsForm onSubmit={this.handleFormSubmit} />
        <GoodsList goods={this.state.goods} onDelete={this.deleteGood} onUpdate={this.updateGood}/>
      </div>
    );
  }
}

export default App;

// serialization

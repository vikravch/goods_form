import { useCallback, useRef, useState } from "react";
import "./App.css";
import { GoodsList } from "./components/GoodsList";
import { Good } from "./types";
import { GoodsForm } from "./components/GoodsForm";
import { getColorById } from "./utils/colors";
import React, { ReactNode } from "react";
import { goodsFromServer } from "./api/goods";
import GoodsListC from "./legacy_components/GoodsListC";

type State = {
  goods: Good[];
  filterQuery: string;
  userName: string;
};

class AppC extends React.Component<unknown, State> {
  state: Readonly<State> = {
    goods: [],
    filterQuery: "",
    userName: "",
  };

  handleFormSubmit = (newGood: Good) => {
    this.setState({
      ...this.state,
      goods: [...this.state.goods, newGood],
    });
  };
  deleteGood = (goodId: number) => {
    // new render!!!!  
    this.setState({
      ...this.state,
      goods: this.state.goods.filter((good) => good.id !== goodId),
    });
  };
  updateGood = (updatedGood: Good) => {
    console.log(updatedGood);
    this.setState({
      ...this.state,
      goods: this.state.goods.map((good) => {
        if (good.id === updatedGood.id) {
          return updatedGood;
        } else {
          return good;
        }
      }),
    });
  };
  askAboutResotore = (deletedGood: Good) => {
    alert(`Do you want to restore? - ${deletedGood.name}`);
    // restore element in list...
  }

  // lifecycle method!!!
  componentDidMount(): void {
    console.log('App componentDidMount');
    const goodsWithColors: Good[] = goodsFromServer.map((good) => ({
        ...good,
        color: getColorById(good.colorId),
      }));
    // new render!!!!  test
    this.setState({...this.state, goods: goodsWithColors});  
  }
  // lifecycle method!!!
  componentWillUnmount(): void {
    console.log('App componentWillUnmount');
  }

  // lifecycle method!!!
  render(): React.ReactNode {
    console.log('App render');
    
    return (
      <div className="App">
        <h1>Goods</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ userName: event.target.value });
          }}
          value={this.state.userName}
          placeholder="user name"
        />

        <input
          type="text"
          onChange={(event) => {
            this.setState({ filterQuery: event.target.value });
          }}
          value={this.state.filterQuery}
          placeholder="filter"
        />
        <GoodsForm onSubmit={this.handleFormSubmit} />
        <GoodsListC
          goods={this.state.goods}
          onDelete={this.deleteGood}
          onUpdate={this.updateGood}
          onDeletedItem={this.askAboutResotore}
        />
      </div>
    );
  }
}

export default AppC;

// serialization

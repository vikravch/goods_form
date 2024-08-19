import React from "react";
import { Good } from "../types";
import GoodCardC from "./GoodCardC";

type Props = {
  goods: Good[];
  onDelete: (goodId: number) => void;
  onUpdate: (good: Good) => void;
  onDeletedItem: (good: Good) => void;
};

export default class GoodListC extends React.Component<Props> {
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}

  // lifecycle method
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log('GoodListC shouldComponentUpdate');
    // default
    // return true;
    // prevProps.goods equal nextProps.goods
    const arrStrPrev = JSON.stringify(this.props.goods);
    const arrStrNext = JSON.stringify(nextProps.goods);
    //console.log(arrStrPrev);
    //console.log(arrStrNext);
    return arrStrPrev !== arrStrNext;
  }
  // return JSX
  // access to properties - this.props
  render() {
    console.log('GoodListC render');
    
    return (
      <div className="GoodList">
        {this.props.goods.map((good) => (
          <article key={good.id} className="GoodCard">
            <GoodCardC
              good={good}
              onDelete={this.props.onDelete}
              onUpdate={this.props.onUpdate}
              onDeletedItem={this.props.onDeletedItem}
            />
          </article>
        ))}
      </div>
    );
  }
}

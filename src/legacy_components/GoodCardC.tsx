import React, { ReactNode } from "react";
import { GoodsForm } from "../components/GoodsForm";
import { Good } from "../types";

type Props = {
    good: Good;
    onDelete: (goodId: number) => void;
    onUpdate: (good: Good) => void;
}
type State = {
    isEditing: boolean;
}
//                   this               super        props type  state type
export default class GoodCardC extends React.Component<  Props,   State   > {
  
  // override!! 
  state: State = {
    isEditing: false,
  };  
  /*constructor(props: Props)  {
    super(props);
    this.state = {
        isEditing: false,
    }
  }*/
  
  /*handleFormSubmit = (newGood: Good) => {
    this.props.onUpdate(newGood);
    this.setState({isEditing: false});
  }*/
  handleFormSubmit(newGood: Good){
    this.props.onUpdate(newGood);
    this.setState({isEditing: false});
  }

  // override
  render(): ReactNode {
    // example!!!!
    //const component: React.Component = new React.Component({});

    //const JSXFromComponent = component.render();
    //console.log("JSXFromComponent - ", JSXFromComponent);

    if (this.state.isEditing) {
      return <GoodsForm onSubmit={this.handleFormSubmit.bind(this)} good={this.props.good} />;
    } else {
      return (
        <p
          className="GoodCard__title"
          style={{ color: this.props.good.color?.name || "black" }}
        >
          <button
            onClick={() => {
              this.props.onDelete(this.props.good.id);
            }}
          >
            x
          </button>
          <button
            onClick={() => {
                this.setState({isEditing: true});
            }}
          >
            Edit
          </button>
          {this.props.good.name}
        </p>
      );
    }
  }
}

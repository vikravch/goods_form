import { useState } from "react";
import { Good } from "../types"
import { GoodsForm } from "./GoodsForm";

type Props = {
    good: Good;
    onDelete: (goodId: number) => void;
    onUpdate: (good: Good) => void;
}

export const GoodCard = ({ good, onDelete, onUpdate }: Props) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleFormSubmit = (newGood: Good)=>{
        onUpdate(newGood);
        setIsEditing(false);
    }

    if(isEditing){
        return (
            <GoodsForm onSubmit={handleFormSubmit} good={good}/>
        )
    } else {
        return (
            <p
              className="GoodCard__title"
              style={{ color: good.color?.name || 'black' }}
            >
              <button onClick={()=>{ onDelete(good.id) }}>x</button>  
              <button onClick={()=>{ setIsEditing(true) }}>Edit</button>
              {good.name}
            </p>
        )
    }
}
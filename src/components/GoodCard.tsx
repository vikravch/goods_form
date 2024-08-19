import { useContext, useEffect, useState } from "react";
import { Good } from "../types"
import { GoodsForm } from "./GoodsForm";
import { GoodsMethodsContext } from "../GoodsContext";

type Props = {
    good: Good;
}

export const GoodCard = ({ good }: Props) => {
    const {updateGood, deleteGood} = useContext(GoodsMethodsContext);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleFormSubmit = (newGood: Good)=>{
        updateGood(newGood);
        setIsEditing(false);
    }

    // componentWillUnmount - ???
    useEffect(
        ()=>{
            return ()=>{
                console.log('GoodCard componentWillUnmount');
            }
        },
        []
    )

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
              <button onClick={()=>{ deleteGood(good.id) }}>x</button>  
              <button onClick={()=>{ setIsEditing(true) }}>Edit</button>
              {good.name}
            </p>
        )
    }
}
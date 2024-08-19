import { useContext } from "react";
import { GoodsForm } from "./GoodsForm";
import { GoodsMethodsContext } from "../GoodsContext";

export const AddGoodForm = ()=>{
    const { addGood } = useContext(GoodsMethodsContext);

    return <GoodsForm onSubmit={addGood} />
}
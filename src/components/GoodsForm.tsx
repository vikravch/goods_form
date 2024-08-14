import classNames from "classnames";
import { useState } from "react";
import { Good } from "../types";
import { getColorById, colors } from "../utils/colors";

type Props = {
    onSubmit?: (newGood: Good) => void;
    good?: Good;
}

export const GoodsForm = ({ onSubmit = ()=>{}, good }: Props) => {

  const [newGoodName, setNewGoodName] = useState(good?.name || '');
  const [selectedColorId, setSelectedColorId] = useState( good?.colorId || 0);
  const [nameError, setNameError] = useState("");
  const [colorIdError, setColorIdError] = useState("");

  const handleOnClickAddButton = (event: React.FormEvent)=>{
    event.preventDefault();

    if( selectedColorId === 0 ){
      setColorIdError('No color selected!');
      return;
    }
    if (newGoodName === ''){
      setNameError('No name typed!');
      return;
    }
    const newId = good?.id || Date.now();
    const newGood = {
      id: newId,
      colorId: selectedColorId,
      name: newGoodName,
      color: getColorById(selectedColorId)
    }
    console.log('new good - ',newGood);
    
    onSubmit(newGood);

    setNewGoodName('');
    setSelectedColorId(0);
  }

  return (
    <form>
      <div className="field">
        <input
          name="good_name"
          type="text"
          className={classNames({ "with-error": nameError })}
          placeholder="Good name"
          onChange={(event) => {
            setNameError("");
            setNewGoodName(event.target.value);
          }}
          onFocus={() => {
            //console.log("Focused!!");
          }}
          onBlur={() => {
            //console.log("onBlur!!");
          }}
          value={newGoodName}
          required
        />
        <span className="error">{nameError}</span>
      </div>

      <div className="field">
        <select
          className={classNames({ "with-error": colorIdError })}
          name="good_color"
          onChange={(event) => {
            //console.log("value changed " + event.target.value);
            setColorIdError("");
            setSelectedColorId(+event.target.value);
          }}
          onFocus={() => {
            //console.log("Focused!!");
          }}
          onBlur={() => {
            //console.log("onBlur!!");
          }}
          value={selectedColorId}
        >
          <option value="0" disabled>
            Choose a color
          </option>

          {colors.map((color) => (
            <option
              onFocus={() => {
                //console.log("Focused item!! " + color.id);
              }}
              key={color.id}
              value={color.id}
            >
              {color.name}
            </option>
          ))}
        </select>
        <span className="error">{colorIdError}</span>
      </div>

      <button
        type="submit"
        onClick={handleOnClickAddButton}
        disabled={selectedColorId === 0 || newGoodName === ""}
      >
        Add
      </button>
    </form>
  );
};

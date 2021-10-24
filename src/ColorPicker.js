import React from "react";
import RgbPicker from "./RgbPicker";
import {toCmyk, toRgb} from "./colorConventer";
import CmykPicker from "./CmykPicker";

const ColorPicker = (props) => {
    const onRgbChange = (name, value) => {
        props.onChange({
            ...props.value,
            [name]: value
        })
    }

    const onCmykChange = (name, value) => {
        const actualCmykValue = toCmyk(props.value);
        const newCmykValue = {
            ...actualCmykValue,
            [name]: value,
        }

        const rgbToSet = toRgb(newCmykValue);
        props.onChange(rgbToSet);
    }

    return (
        <div>
            <RgbPicker onChange={onRgbChange} value={props.value}/>
            <CmykPicker onChange={onCmykChange} value={toCmyk(props.value)}/>
        </div>
    )
}
export default ColorPicker
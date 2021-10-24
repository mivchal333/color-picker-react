import React from "react";

const ColorPreview = ({color}) => {
    const colorCss = `rgb(${color.r}, ${color.g},${color.b})`

    return (
        <div style={{width: '500px', height: '500px', backgroundColor: colorCss}}>

        </div>
    )
}
export default ColorPreview
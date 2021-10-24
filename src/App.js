import {useState} from "react";
import ColorPreview from "./ColorPreview";
import ColorPicker from "./ColorPicker";
import {SketchPicker} from "react-color";

const initialState = {r: 120, g: 120, b: 120};

function App() {

    const [color, setColor] = useState(initialState)

    const handleChangeComplete = (color) => {
        if (color && color.rgb) {
            setColor(color.rgb)
        }
    };

    return (
        <div style={{display: 'flex'}}>
            <ColorPreview color={color}/>
            <ColorPicker onChange={setColor} value={color}/>
            <SketchPicker
                width={400}
                color={color}
                disableAlpha
                onChangeComplete={handleChangeComplete}
            />
        </div>

    );
}

export default App;

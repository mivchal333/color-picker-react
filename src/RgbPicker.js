import * as React from 'react';

const RgbPicker = (props) => {


    const onChange = (event) => {
        const {name, value} = event.target

        props.onChange(name, value)
    }


    return (
        <div>
            <h4>RGB</h4>
            <div>
                <label>R</label>
                <input name="r" value={props.value.r} onChange={onChange} type="number" required/>
            </div>
            <div>
                <label>G</label>
                <input name="g" value={props.value.g} onChange={onChange} type="number" required/>
            </div>
            <div>
                <label>B</label>
                <input name="b" value={props.value.b} onChange={onChange} type="number" required/>
            </div>
        </div>
    );
};
export default RgbPicker
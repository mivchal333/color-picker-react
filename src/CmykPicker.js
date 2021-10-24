import * as React from 'react';

const CmykPicker = (props) => {
    const onChange = (event) => {
        const {name, value} = event.target

        props.onChange(name, value)
    }

    return (
        <div>
            <h4>CMYK</h4>
            <div>
                <label>C</label>
                <input name="c" value={props.value.c} onChange={onChange}/>
            </div>
            <div>
                <label>M</label>
                <input name="m" value={props.value.m} onChange={onChange}/>
            </div>
            <div>
                <label>Y</label>
                <input name="y" value={props.value.y} onChange={onChange}/>
            </div>
            <div>
                <label>K</label>
                <input name="k" value={props.value.k} onChange={onChange}/>
            </div>
        </div>
    );
};
export default CmykPicker
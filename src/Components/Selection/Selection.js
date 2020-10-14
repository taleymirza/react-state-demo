import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer'
import SelectBox from '../SelectBox/SelectBox';


function Selection() {
    const [option, setOption] = React.useState("select");
    return (
        <>
            <SelectBox option={option} changeOption={setOption} />
            <ImageContainer imageName={option} setOption={setOption} />
        </>
    );
}

export default Selection;

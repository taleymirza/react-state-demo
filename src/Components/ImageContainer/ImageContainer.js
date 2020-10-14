import React from 'react';
import FruitImage from '../../static/Images/fruit.png';
import VegImage from '../../static/Images/veg.jpg';
import SelectImage from '../../static/Images/select.jpg';
import MeatImage from '../../static/Images/meat.png';
import './ImageContainer.css';


const ImageContainer = ({ imageName, setOption }) => {
    const getImage = (name) => {
        switch (name) {
            case "fruit":
                return FruitImage;
            case "veg":
                return VegImage;
            case "meat":
                return MeatImage;
            default:
                return SelectImage;
        }
    }

    return (
        <div className="image-container">
            <img src={getImage(imageName)} alt={imageName} />
            <button onClick={() => setOption("select")}>Clear</button>
        </div>
    )

}

export default ImageContainer
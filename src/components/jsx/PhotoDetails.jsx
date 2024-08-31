import React from 'react';
import '../style/PhotoDetails.css';
import { useParams } from 'react-router-dom';

export default function PhotoDetails(props) {
    const { id } = useParams();
    const photoId = parseInt(id, 10); // Convert id to a number
    const photo = props.artData.find((photo) => photo.id === photoId);
    return (
        <div className="imagedetailswrapper">
            <div className="left">
                <img className="img" src={photo.images.hero.large} />
                <div className="column">
                    <div className="data">
                        <h1>{photo.name}</h1>
                        <h6>{photo.artist.name}</h6>
                        <img className="author" src={photo.artist.image} />
                    </div>
                </div>
            </div>
            <div className="right ">
                <h1>{photo.year}</h1>
                <p>{photo.description}</p>
            </div>
        </div>
    );
}

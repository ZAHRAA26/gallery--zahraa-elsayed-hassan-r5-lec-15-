import React from 'react';
import Masonry from 'react-masonry-css';
import '../style/Gallery.css';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
    return (
        <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="gallerywrapper"
            columnClassName="gallerycolumn"
        >
            {props.artData.map((photo) => (
                <div className="imageContainer" key={photo.id}>
                    <Link to={`/${photo.id}`}>
                        <img src={photo.images.thumbnail} alt={photo.name} />
                        <div className="words">
                            <h3>{photo.name}</h3>
                            <h5>{photo.artist.name}</h5>
                        </div>
                    </Link>
                </div>
            ))}
        </Masonry>
    );
};
export default Gallery;

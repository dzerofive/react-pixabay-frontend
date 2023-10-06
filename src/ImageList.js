import React from 'react';
import './ImageList.css'

const ImageList = (props) => {
        const images = props.images.map((image) => {
                return (
                        <a className='image-frame' href={image.pageURL} key={image.id}>
                                <img src={image.webformatURL} alt="search result"/>
                        </a>
                )
        });

        return(
                <div className='image-list'>
                        {images}
                </div>
        )
}

export default ImageList;

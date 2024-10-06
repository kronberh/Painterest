import "./Gallery.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { waitForImages } from "./waitForImages";
import { Image } from "../model/Image";
import { fetchImages } from "../slices/imagesSlice";

function Gallery(): JSX.Element {
    const images = useSelector((state: any) => state.images);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchImages());
        waitForImages();
    }, [images]);
    
    return (
        <>
            <div className="masonry-container">
                <div className="masonry">
                    {[...images].reverse().map((image: Image, index: number) => (
                        <div key={index} className="masonry-item">
                            <img src={image.data} alt={image.title} className="masonry-content" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export { Gallery };
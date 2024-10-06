import React from "react";
import { useSelector } from "react-redux";
import "./Gallery.css";
import { waitForImages } from "./waitForImages";
import { Image } from "../model/Image";

function Gallery(): JSX.Element {
    const images: Image[] = useSelector((state: any) => state.images);

    React.useEffect(() => {
        waitForImages();
    }, [images]);
    
    return (
        <>
            <div className="masonry-container">
                <div className="masonry">
                    {[...images]?.reverse().map((image: Image, index: number) => (
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
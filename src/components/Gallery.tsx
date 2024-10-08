import "./Gallery.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { waitForImages } from "./waitForImages";
import { Image } from "../model/Image";
import { fetchImages } from "../slices/imagesSlice";
import { LoadingSpinner } from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { ErrorScreen } from "./ErrorScreen";

function Gallery(): JSX.Element {
    const { images, loading, error } = useSelector((state: any) => state.images);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImageClick = (id: string): any => {
        return () => {
            navigate(`/image/${id}`);
        }
    };

    React.useEffect((): void => {
        dispatch(fetchImages());
    }, [dispatch]);
    React.useEffect((): void => {
        if (!loading && !error) {
            waitForImages();
        }
    }, [loading]);
    
    return (
        <>
        <div className="masonry-container">
            <div className="masonry">
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorScreen />
                ) : (
                    [...images].reverse().map((image: Image, index: number) => (
                        <div key={index} className="masonry-item" onClick={handleImageClick(image.id)}>
                           <img src={image.data} alt={image.title} className="masonry-content" />
                        </div>
                    ))
                )}
                </div>
            </div>
        </>
    );
}

export { Gallery };
import "./Gallery.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { waitForImages } from "./waitForImages";
import { Image } from "../model/Image";
import { fetchImages } from "../slices/imagesSlice";
import { LoadingSpinner } from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { ErrorScreen } from "./ErrorScreen";
import { style } from "typestyle";

function Gallery(): JSX.Element {
    const params = Object.fromEntries(new URLSearchParams(location.search));
    const { images, loading, error } = useSelector((state: any) => state.images);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImageClick = (id: string): any => {
        return () => {
            navigate(`/image/${id}`);
        }
    };

    React.useEffect((): void => {
        dispatch(fetchImages(params));
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
                            <img src={image.data} className="masonry-content" />
                            <div className="masonry-info">
                                <span>{image.title} <span className="masonry-views">{image.views}👁</span><span className="masonry-likes">{image.likes}♥</span></span>
                                <div className="masonry-tags">
                                    {image.tags?.map((element: string, index: number) => {
                                        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
                                        const tagStyle = style({
                                            border: "none",
                                            fontSize: "1em",
                                            fontWeight: 600,
                                            padding: "0.5em",
                                            borderRadius: "99em",
                                            color: "azure",
                                            backgroundColor: color,
                                            $nest: {
                                                '&:hover': {
                                                    boxShadow: `0 0 1em ${color}`,
                                                    transition: ".1s ease-in",
                                                }
                                            }
                                        });
                                        return <>
                                            <button key={index} className={tagStyle}>{element}</button>
                                        </>
                                    })}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                </div>
            </div>
        </>
    );
}

export { Gallery };
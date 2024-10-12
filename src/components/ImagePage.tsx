import "./ImagePage.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { style } from "typestyle";
import { deleteImage, getImage, likeImage } from "../slices/imagesSlice";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorScreen } from "./ErrorScreen";

function ImagePage(): JSX.Element {
    const { id } = useParams();

    const { image, loading, error } = useSelector((state: any) => state.images);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLikeImage = (e: any): void => {
        dispatch(likeImage(id));
        e.target.disabled = true;
        e.target.innerHTML = "♥";
        e.target.classList.add('liked-button');
    };

    const handleEditImage = (): void => {
        navigate(`/edit-image/${id}`);
    };

    const handleDeleteImage = (): void => {
        dispatch(deleteImage(id));
        navigate("/");
    };

    React.useEffect((): void => {
        dispatch(getImage(id));
    }, [dispatch]);

    return (
        <>
            <div className="image-page-container">
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorScreen />
                ) : (
                    <>
                        <div>
                            <img src={image.data} className="image-info-preview" />
                        </div>
                        <div>
                            <div className="image-desc-container">
                                <p><strong>Author email:</strong> <a href="#">{image.author}</a></p>
                            </div>
                            <div className="image-desc-container">
                                <p><strong>Title: </strong>{image.title}</p>
                             </div>
                            <div className="image-desc-container image-description-container">
                                <p><strong>Description:</strong></p>
                                <div className="image-description">
                                    <p>{image.description}</p>
                                </div>
                            </div>
                            <div className="image-desc-container image-tags-container">
                                <p style={{width: "auto"}}><strong>Tags:</strong></p>
                                <div className="tags-container">
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
                            <div className="buttons-container">
                            <button className="like-button" onClick={handleLikeImage}>♡</button>
                                <button className="edit-button" onClick={handleEditImage}>Edit Info</button>
                                <button className="delete-button" onClick={handleDeleteImage}>Delete Image</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export { ImagePage };
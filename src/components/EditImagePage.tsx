import "./EditImagePage.css";
import { useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Image } from "../model/Image";
import { editImage, getImage } from "../slices/imagesSlice";
import React from "react";

function EditImagePage(): JSX.Element {
  const { id } = useParams();

  const { image } = useSelector((state: any) => state.images);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef: any = useRef();
  const descriptionRef: any = useRef();
  const tagsRef: any = useRef();

  const handleChangeTitle = (): void => {
    if (titleRef.current.value) {
      const newImage: Partial<Image> = {
        id: id,
        title: titleRef.current.value,
      };
      dispatch(editImage(newImage));
      titleRef.current.value = '';
    }
  };

  const handleChangeDescription = (): void => {
    const newImage: Partial<Image> = {
      id: id,
      description: descriptionRef.current.value,
    };
    dispatch(editImage(newImage));
    descriptionRef.current.value = '';
  };

  const handleChangeTags = (): void => {
    const newImage: Partial<Image> = {
      id: id,
      tags: tagsRef.current.value.split(/\W+/).filter(Boolean),
    };
    dispatch(editImage(newImage));
    tagsRef.current.value = '';
  };

  const handleEndEdit = (): void => {
    navigate(`/image/${image.id}`)
  };

  React.useEffect((): void => {
    dispatch(getImage(id));
  }, [dispatch]);

  return <>
    <form className="edit-image-form" encType="multipart/form-data">
      <div>
        <img src={image.data} className="image-preview" />
        <br />
      </div>
      <div>
        <div className="input-container">
          <label>Author email</label>
          <input type="email" value={image.author} readOnly />
        </div>
        <div className="input-container">
          <label>Title</label>
          <div className="input-container-2">
            <input type="text" ref={titleRef} placeholder={image.title} required />
            <button type="button" onClick={handleChangeTitle}>Commit*</button>
          </div>
        </div>
        <div className="input-container">
          <label>Description</label>
          <div className="input-container-2">
            <textarea ref={descriptionRef} placeholder={image.description}></textarea>
            <button type="button" onClick={handleChangeDescription}>Commit</button>
          </div>
        </div>
        <div className="input-container">
          <label>Tags (separate by space/commas)</label>
          <div className="input-container-2">
            <input type="text" ref={tagsRef} placeholder={image.tags.join(' ')} />
            <button type="button" onClick={handleChangeTags}>Commit</button>
          </div>
        </div>
        <button className="button-end-edit" type="button" onClick={handleEndEdit}>End Editing Image</button>
      </div>
    </form>
  </>;
}

export { EditImagePage };
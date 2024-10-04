import "./AddImageForm.css";
import { useRef, useState } from "react";

function AddImageForm(): JSX.Element {
  const [base64Image, setBase64Image] = useState<string>();
  const imageRef: any = useRef();
  const authorRef: any = useRef();
  const titleRef: any = useRef();
  const descriptionRef: any = useRef();
  const tagsRef: any = useRef();

  const handleImageChange = (e: any): void => {
    e.preventDefault();
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: any= reader.result;
      setBase64Image(base64String);
    }
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    // todo
  };

  return <>
    <form className="add-image-form" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div>
        <img src={base64Image} className="image-preview" aria-required={true} />
        <br />
        <input type="file" accept="image/*" ref={imageRef} onChange={handleImageChange} aria-required={true} />
      </div>
      <div>
        <div className="input-container">
          <label>Author email</label>
          <input type="email" ref={authorRef} aria-required={true} />
        </div>
        <div className="input-container">
          <label>Title</label>
          <input type="text" ref={titleRef} aria-required={true} />
        </div>
        <div className="input-container">
          <label>Description</label>
          <textarea ref={descriptionRef}></textarea>
        </div>
        <div className="input-container">
          <label>Tags (separate by space/commas)</label>
          <input type="text" ref={tagsRef} />
        </div>
        <button type="submit">Add Image</button>
      </div>
    </form>
  </>;
}

export { AddImageForm }

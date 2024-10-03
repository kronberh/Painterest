import { useRef, useState } from "react";

function AddImageForm(): JSX.Element {
  const [base64Image, setBase64Image] = useState<string>();
  const imageRef: any = useRef();

  const handleImageChange = (e: any) => {
    e.preventDefault();
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String: any= reader.result;
      setBase64Image(base64String);
    }
    reader.readAsDataURL(file);
  };

  return <>
    <form encType="multipart/form-data">
      <img src={base64Image} style={{width: "40em", height: "40em", objectFit: "contain"}}></img>
      <input type="file" id="imageInput" accept="image/*" ref={imageRef} onChange={handleImageChange} required />
    </form>
  </>;
}

export { AddImageForm }

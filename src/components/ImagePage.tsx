import { useParams } from "react-router-dom";

function ImagePage(): JSX.Element {
const { id } = useParams();

  return <>
    <p>placeholder {id}</p>
  </>;
}

export { ImagePage };
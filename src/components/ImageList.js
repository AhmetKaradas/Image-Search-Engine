import ImageItem from "./ImageItem";
import "../App.css";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image}></ImageItem>;
      })}
    </div>
  );
}

export default ImageList;

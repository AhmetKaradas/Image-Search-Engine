import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])

 const handleSubmit = async (name)=>{
  console.log(name);
  const result = await searchImages(name);
  setImages(result);
 };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}></SearchHeader>
      <ImageList imagesPlaceholder={images} ></ImageList>
    </div>
  );
}

export default App;

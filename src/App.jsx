import React, { useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { GlobalStyles } from "./GlobalStyles";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState('')
  const [result, setResult] = useState([])

  const handleChange = (e) => {
    setImage(e.target.value);
  }

  const handleSubmit = () => {
    const url = 'https://api.unsplash.com/search/photos?page=1&query=' + image + '&client_id=' + process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY
    axios.get(url).then((res) => {
      setResult(res.data.results)
    })
  }

  return (
    <>
      <Header handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="grid">
        {result && result.map((image) => (
          <Card imgId={image.id} imgSrc={image.urls.thumb} imgAlt={image.title} imgUser={image.user.name} imgLikes={image.likes} />
        ))}
      </div>
      <GlobalStyles />
    </>
  );
}

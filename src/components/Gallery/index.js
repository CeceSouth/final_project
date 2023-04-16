import { useEffect, useState } from 'react';
import Painting from '../Painting';
import './index.css';


function Gallery() {
  const [paintingIDs, setPaintingIDs] = useState()
  const [loadMore, setLoadMore] = useState(0)
  const [displayPaintingIDs, setDisplayPaintingIDs] = useState()
  const [viewPaintings, setViewPaintings] = useState()
  
  useEffect(() => {
    // Get paintingIDs from API
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=jesus?hasImages=true?medium=Paintings`)
    .then(res => res.json())
    .then((ids) => {
      setPaintingIDs(ids)
    })
    .catch((err) => console.log(err))

  }, [])

  // Get details of the paintings such as title and image.
  useEffect(()=> {
    
    if (paintingIDs) {
      const paintings = paintingIDs.objectIDs.slice(loadMore, loadMore+11)
      
      paintings.forEach((id) => 
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(res => res.json())
        .then((painting) => setViewPaintings((prevState) => ({...prevState, [id]: painting}))

        )

      //setLoadMore(loadMore+11)
    )
    }
  }, [paintingIDs, loadMore])

  

  return (
    <div className="App">
      <p>Gallery</p>

      <div className="paintings">
        
        {(!viewPaintings) ? <h1>Loading</h1> : 
          Object.keys(viewPaintings).map((painting) => {
            return(<Painting 
              key = {painting}
              primaryImage = {viewPaintings[painting].primaryImage}
              title = {viewPaintings[painting].title}
            />)
          })

        }
      </div>
    </div>
  );
}

export default Gallery;

import { useEffect, useState } from 'react';
import Painting from '../Painting';
import './index.css';




function Gallery() {
  const [paintingIDs, setPaintingIDs] = useState()
  const [loadMore, setLoadMore] = useState(0)
  const [viewPaintings, setViewPaintings] = useState()
  const [like, setLike] = useState()
  
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
        .then((painting) => {
          setViewPaintings((prevState) => ({...prevState, [id]: painting}))
          setLike((prevState) => ({...prevState, [id]: false}))
        })
        .catch((err) => console.log(err))

      //setLoadMore(loadMore+11)
      
    )
    }
  }, [paintingIDs, loadMore])

  console.log(like)

  return (
    <div className="App">
      <p>Gallery</p>

      <div className="paintings">
        
        {(!viewPaintings) ? <h1>Loading</h1> : 
          Object.keys(viewPaintings).map((id) => {

            
            return(<Painting 
              key = {id}
              paintingID = {id}
              painting = {viewPaintings[id]}
              like = {like[id]}
              setLike = {setLike}
            />)
          })

        }
      </div>
    </div>
    
  );
}

export default Gallery;

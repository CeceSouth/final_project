import { useEffect, useState } from 'react';
import Painting from '../Painting';
import './index.css';

function Gallery() {
  const [paintingIDs, setPaintingIDs] = useState()
  const [loadMore, setLoadMore] = useState(0)
  const [viewPaintings, setViewPaintings] = useState([])
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
      console.log(paintings)
      let newPaintings = [...viewPaintings]
      
      paintings.forEach((id) => 
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        .then(res => res.json())
        .then((painting) => {
          
          newPaintings.push(painting)
          setViewPaintings(newPaintings)
          // setViewPaintings((prevState) => ({...prevState, [id]: painting}))
          setLike((prevState) => ({...prevState, [id]: false}))
        })
        .catch((err) => console.log(err))      
      )
    }
  }, [paintingIDs, loadMore])

  function loadMorePaintings() {
    setLoadMore(loadMore+12)
  }

  return (
    <div className="App">
      <p className='introduction'>Religion painting show of the medieval Europe </p>
      <div className="paintings">
        
        
        {(!viewPaintings) ? <h1>Loading</h1> : 
          Object.keys(viewPaintings).map((id) => {
            console.log(viewPaintings[id].objectID)
            return(<Painting 
              key = {viewPaintings[id].objectID}
              paintingID = {viewPaintings[id].objectID}
              painting = {viewPaintings[id]}
              like = {like[viewPaintings[id].objectID]}
              setLike = {setLike}
            />)
          })

        }
      </div>
      <button onClick={()=>loadMorePaintings()}>Load More</button>
    </div>
    
  );
}

export default Gallery;

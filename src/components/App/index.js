import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const [paintingIDs, setPaintingIDs] = useState()
  const [displayPaintingIDs, setDisplayPaintingIDs] = useState()
  const [viewPaintings, setViewPaintings] = useState()
  const paintings = {"objectID":464253,"isHighlight":false,"accessionNumber":"17.190.253","accessionYear":"1917","isPublicDomain":true,"primaryImage":"https://images.metmuseum.org/CRDImages/md/original/sf17-190-253s1.jpg","primaryImageSmall":"https://images.metmuseum.org/CRDImages/md/web-large/sf17-190-253s1.jpg","additionalImages":["https://images.metmuseum.org/CRDImages/md/original/sf17-190-253d3.jpg","https://images.metmuseum.org/CRDImages/md/original/sf17-190-253d2.jpg","https://images.metmuseum.org/CRDImages/md/original/sf17-190-253d1.jpg","https://images.metmuseum.org/CRDImages/md/original/sf17-190-253s2.jpg","https://images.metmuseum.org/CRDImages/md/original/sf17-190-253s3.jpg","https://images.metmuseum.org/CRDImages/md/original/sf17-190-253s4.jpg"],"constituents":null,"department":"Medieval Art","objectName":"Folding shrine","title":"Folding Shrine with Virgin and Child","culture":"French","period":"","dynasty":"","reign":"","portfolio":"","artistRole":"","artistPrefix":"","artistDisplayName":"","artistDisplayBio":"","artistSuffix":"","artistAlphaSort":"","artistNationality":"","artistBeginDate":"","artistEndDate":"","artistGender":"","artistWikidata_URL":"","artistULAN_URL":"","objectDate":"14th century","objectBeginDate":1300,"objectEndDate":1399,"medium":"Elephant ivory with  traces of polychromy and metal mounts","dimensions":"Overall (opened): 5 1/2 x 5 1/2 x 1 in. (14 x 14 x 2.5 cm)\r\nclosed: 5 1/2 x 2 5/16 x 1 1/4in. (14 x 5.8 x 3.1cm)","measurements":[{"elementName":"Other","elementDescription":"closed","elementMeasurements":{"Depth":3.1,"Height":14,"Width":5.8}},{"elementName":"Overall","elementDescription":"opened","elementMeasurements":{"Depth":2.5,"Height":14,"Width":14}}],"creditLine":"Gift of J. Pierpont Morgan, 1917","geographyType":"","city":"","state":"","county":"","country":"","region":"","subregion":"","locale":"","locus":"","excavation":"","river":"","classification":"Ivories-Elephant","rightsAndReproduction":"","linkResource":"","metadataDate":"2022-02-10T04:42:27.663Z","repository":"Metropolitan Museum of Art, New York, NY","objectURL":"https://www.metmuseum.org/art/collection/search/464253","tags":[{"term":"Men","AAT_URL":"http://vocab.getty.edu/page/aat/300025928","Wikidata_URL":"https://www.wikidata.org/wiki/Q8441"},{"term":"Women","AAT_URL":"http://vocab.getty.edu/page/aat/300025943","Wikidata_URL":"https://www.wikidata.org/wiki/Q467"},{"term":"Saints","AAT_URL":"http://vocab.getty.edu/page/aat/300150555","Wikidata_URL":"https://www.wikidata.org/wiki/Q43115"}],"objectWikidata_URL":"","isTimelineWork":false,"GalleryNumber":""}

  // useEffect(() => {
  //   // Get paintingIDs from API
  //   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=jesus?hasImages=true?medium=Paintings`)
  //   .then(res => res.json())
  //   .then((ids) => {
  //     setPaintingIDs(ids)

  //   })
  //   .catch((err) => console.log(err))

  
  //   // Get details of the paintings such as title and image.

  // }, [])

// console.log(paintingIDs)
  // useEffect(()=> {
  //   console.log(paintingIDs)
  //   // setDisplayPaintingIDs(paintingIDs.objectIDs.slice(0, 11))
  //   // paintingIDs.objectIDs.forEach((id) => 
  //   //   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
  //   //   .then(res => res.json())
  //   //   .then((painting) => console.log(painting))
  //   // )
  // }, [paintingIDs])

  
// useEffect(()=> {
//   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/464253`)
//   .then(res => res.json())
//   .then((paintingInfo) => {
//     setViewPaintings(paintingInfo)
//     console.log(paintingInfo)
//   })
//   .catch((err) => console.log(err))
// }, [])


 //

  return (
    <div className="App">
      <p>Gallery</p>
      <img className="paintings"
        src={paintings.primaryImage}
        alt={paintings.title}
      />
            <img className="paintings"
        src={paintings.primaryImage}
        alt={paintings.title}
      />
            <img className="paintings"
        src={paintings.primaryImage}
        alt={paintings.title}
      />
    </div>
  );
}

export default App;

import './App.css';
import Row from './Row';
import React from 'react';
import requests from './request.js'
import Banner from './Banner'
import Nav from './Nav';
function App() {
 
  return (
    <div className="App">

    {/*nav bar*/}
      <Nav />
    {/*build banner*/}

    <Banner />

      <Row
       title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
      <Row title="Tending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     
      
    </div>
  );
}

export default App;

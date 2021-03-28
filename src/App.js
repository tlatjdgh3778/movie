import React, {useState, useEffect } from 'react';
import FilterNav from './components/FilterNav';
import DisplayMovie from './components/DisplayMovie';
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';
import Modal from './components/Modal';

function App() {

  const API_KEY = "8df3ad55340084ac780b98e8fa62f3d4";
  const [movie, setMovie] = useState({
    filterType : '',
    results: [],
    detail: false,
    id:'',
    details:[],
    alert:false,
    alertMsg:'',
  })

  // popular movie
  const onFilterBtn = async (name) => {
    const targetBtn  = name;
    // const targetBtn  = e.target.nodeName==='path' ? e.target.parentNode.parentNode.className : e.target.className;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${targetBtn}?api_key=${API_KEY}&language=en-US&page=1`);

    
    const data = await response.json();
    setMovie({...movie, filterType:targetBtn, results:data.results, detail:false});
    // data.results = 버튼에 따른 리스트 20개

  }

  const searchData = (data) => {
    //let search_data = '';
    searchDataMovie(data);
  } 
  const searchDataMovie = async (search_data, e) => {

      if(search_data.length>0){
        const search_response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search_data}&page=1&include_adult=false`);

        const search_response_data = await search_response.json();
        
  
        if(search_response_data.results.length>0){
          setMovie({...movie, results:search_response_data.results, detail:false});
        }else{
        setMovie({...movie, alert:true, alertMsg:"Movie not found"});
        setTimeout(()=>{
          setMovie({...movie, alert:false});
        },2000);
        }

      }else{
        setMovie({...movie, alert:true, alertMsg:"Please enter the title"});
        setTimeout(()=>{
          setMovie({...movie, alert:false});
        },2000);
      }

    
  }
  const showDetail = () => {
    setMovie({...movie, detail:true});
  };

  const closeDetail = () => {
    setMovie({...movie, detail:false});
  };
  
  // 내가 누른 영화의 아이디 값을 전달 받은거임
  const getMovieID = async(id) => {
      
  const id_response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);

  const id_response_data = await id_response.json();
  setMovie({...movie, details:id_response_data, detail:true, id:id });
  }
  useEffect(()=> onFilterBtn('popular'),[]);

  return (
    <>
    <Modal
    alertShow={movie.alert}
    alertMsg={movie.alertMsg}></Modal>
    <header>
      <MovieSearch 
      searchData={searchData}
      ></MovieSearch>
    </header>
    <main>
      <aside>
        <FilterNav 
        onFilterBtn={onFilterBtn}></FilterNav>
      </aside>
      <section>
        {movie.detail?
        <MovieDetail
        details={movie.details}
        movieid={movie.id}
        closeDetail={closeDetail}></MovieDetail>:
        <DisplayMovie 
        filterType={movie.filterType}
        results={movie.results}
        detail={movie.detail}
        showDetail={showDetail}
        closeDetail={closeDetail}
        getMovieID={getMovieID}
        ></DisplayMovie>}
      </section>
    </main>
    </>
  );

}

export default App;

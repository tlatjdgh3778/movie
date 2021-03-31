import React, {useState, useEffect } from 'react';
import FilterNav from './components/FilterNav';
import DisplayMovie from './components/DisplayMovie';
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';
import AlertModal from './components/AlertModal';
import GoodMovie from './components/GoodMovie';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState({
    filterType : '',
    results: [],
    detail: false,
    id:'',
    details:[],
    alert:false,
    alertMsg:'',
    goodBtn:false,
    videos:[],
  })

  // filter button 을 누르면 popular, top rated, now playing 중에 해당하는 value 값을 가져와서(name) targetBtn에 저장
  const filterBtn = async (name) => {
    const targetBtn  = name;
    if(targetBtn==='good'){
       setMovie({...movie, detail:false, filterType:targetBtn, goodBtn:true});
    }else{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${targetBtn}?api_key=${API_KEY}&language=ko&page=1`);

      const data = await response.json();
      setMovie({...movie, filterType:targetBtn, results:data.results, detail:false, goodBtn:false});
    }

  }

  // 검색창에 입력한 값(data)를 searchDataMovie로 전달
  const searchData = (data) => {
    searchDataMovie(data);
  } 

  // 검색창에 입력한 값을 search_data로 받음
  // 0자 이하면 please.. 모달 창 보여줌
  // 1자 이상일 때는 api 호출하고 해당하는 영화가 없으면 movie not fount 모달 창 보여주고
  // 해당하는 영화가 있으면 setMovie로 해당하는 영화들에 대한 정보를 results 에 저장
  const searchDataMovie = async (search_data, e) => {
      try{
        const search_response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko&query=${search_data}&page=1&include_adult=false`);

        const search_response_data = await search_response.json();
        
        if(search_response_data.results.length>0){
          setMovie({...movie, results:search_response_data.results, detail:false, goodBtn:false, filterType:search_data});
        }else{
          setMovie({...movie, alert:true, alertMsg:"해당하는 영화가 없습니다"});
          setTimeout(()=>{
            setMovie({...movie, alert:false});
          },2000);
        }
      }catch(error){
        console.log(error);
        setMovie({...movie, alert:true, alertMsg:"제목을 입력해주세요"});
        setTimeout(()=>{
          setMovie({...movie, alert:false});
        },2000);;
      }
  }

  // const showDetail = () => {
  //   setMovie({...movie, detail:true});
  // };

  // x 버튼을 누르면 detail 페이지 종료
  const closeDetail = () => {
    setMovie({...movie, detail:false});
  };
  
  // 내가 누른 영화의 아이디 값을 전달 받은거임
  // detail을 true 로 바꿔주면서 해당 영화의 detail 페이지를 보여줌
  const getMovieID = async(id) => {
      
    const id_response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko`);
    const video_response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=ko&page=1`);

    const id_response_data = await id_response.json();
    const video_response_data = await video_response.json();

    setMovie({...movie, details:id_response_data, detail:true, id:id, goodBtn:false, videos:video_response_data });
  }

  // 제일 처음 화면에는 popular 목록들을 보여줌
  // Didmount
  useEffect(()=> filterBtn('popular'),[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);

  return (
    <>
    <AlertModal
    alertShow={movie.alert}
    alertMsg={movie.alertMsg}
    ></AlertModal>
    <header>
      <MovieSearch 
      searchData={searchData}
      ></MovieSearch>
    </header>
    <main>
      <aside>
        <FilterNav 
        filterBtn={filterBtn}
        ></FilterNav>
      </aside>
      <article>
        {movie.detail?
        <MovieDetail
        details={movie.details}
        movieid={movie.id}
        videos={movie.videos}
        getMovieID={getMovieID}
        closeDetail={closeDetail}
        ></MovieDetail>:
        <DisplayMovie 
        filterType={movie.filterType}
        results={movie.results}
        detail={movie.detail}
        getMovieID={getMovieID}
        goodBtn={movie.goodBtn}
        ></DisplayMovie>}
      </article>
    </main>
    </>
  );
}

export default App;

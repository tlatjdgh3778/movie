import React, { useState } from "react";
import DisplayMovieMap from "./DisplayMovieMap";
import GoodMovie from './GoodMovie';

function DisplayMovie({filterType, results, detail, getMovieID, goodBtn}) {
    const [del, setDel] = useState({
        state:false,
    })
    // const movie_image = `https://image.tmdb.org/t/p/original/${}`;
    let currentPage = "";
    if(filterType==='popular'){
        currentPage = "인기 있는 영화"
    }
    if(filterType==='top_rated'){
        currentPage = "좋은 평가 영화"
    }
    if(filterType==='now_playing'){
        currentPage = "상영중인 영화"
    }
    if(filterType==='good'){
        currentPage = "좋아하는 영화"
    }
    const dataAll = Object.keys(localStorage);

    const deleteGood = () => {
        setDel({state:!del.state});
    }
    
    if(goodBtn===true){
        
        return (
        <div className="movieContainer">
            <h1 className="currentPage">{currentPage}</h1>
            {dataAll.map((storageKey)=> {
                return <GoodMovie deleteGood={deleteGood} storageKey={storageKey}></GoodMovie>
            })}
        </div>
        );
    }else{
        return(
            <div className="movieContainer">
            <h1 className="currentPage">{currentPage}</h1>
            <>
                {results.map((result)=>{
                    return <DisplayMovieMap
                    key={result.id}
                    result={result}
                    detail={detail}
                    getMovieID={getMovieID}
                    ></DisplayMovieMap>
                })}
            </>
            </div>
        );
    }
}

export default DisplayMovie;
import React from "react";
import DisplayMovieMap from "./DisplayMovieMap";

function DisplayMovie({filterType, results, detail, getMovieID}) {

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
    return(
        <div className="Moive_Container">
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

export default DisplayMovie;
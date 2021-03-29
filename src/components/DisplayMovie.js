import React from "react";
import DisplayMovieMap from "./DisplayMovieMap";

function DisplayMovie({filterType, results, detail, getMovieID}) {
    // const movie_image = `https://image.tmdb.org/t/p/original/${}`;
    let currentPage = "";
    if(filterType==='popular'){
        currentPage = "Popular Movies"
    }
    if(filterType==='top_rated'){
        currentPage = "Top Rated Movies"
    }
    if(filterType==='now_playing'){
        currentPage = "Now Playing Movies"
    }
    if(filterType==='latest'){
        currentPage = "Latest Movies"
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
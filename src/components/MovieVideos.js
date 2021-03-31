import React from "react";

function MovieVideos({id, title, poster_path, getMovieID, vote, release_date}) {

    const null_img = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const poster_img = poster_path===null?null_img:`https://image.tmdb.org/t/p/original/${poster_path}`;

    const onGetMovieID = () => {
        getMovieID(id);
    }
    return(
        <div className="movies" onClick={onGetMovieID}>
            <img className="similarPoster" src={poster_img} alt={title}></img>
            <div className="inPosterText">
                <div className="inPosterTextTitle">{title}</div>
                <div className="inPosterTextVote">★ {vote} / 10</div>
            </div>
            <div className="releaseDate">{release_date.split('-')[0]}</div>
            <div className="movieTitle">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default MovieVideos;
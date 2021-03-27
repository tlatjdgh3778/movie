import React from "react";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieDetail({details, closeDetail}) {
    const null_img = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const poster_img = details.poster_path===null?null_img:`https://image.tmdb.org/t/p/original/${details.poster_path}`;
    const backdrop_img = details.backdrop_path===null?null_img :`https://image.tmdb.org/t/p/original/${details.backdrop_path}`;

    
    const onClick = (e) => {
        closeDetail();
    }
    return(
        // 상세설명 부분
        <div className="detailContainer">
            <div className="backdropContainer">
                <img className="backdropImg" src={backdrop_img} alt={details.title}></img>           
            </div>
            <div className="movieDetail">
                        <div><img className="detailImg" src={poster_img} alt={details.title}></img></div>
                        <button className="closeBtn" onClick={onClick}><FontAwesomeIcon icon={faTimesCircle}/></button>
                        <div className="detailInfo">
                            <div className="detailTitle">{details.title}</div>
                            <div className="detailGenres">
                                <span>Genres : </span>
                                <span>{details.genres.map((genre)=>{
                                    return <MovieGenres key={genre.id} genre={genre.name}></MovieGenres>
                                })}</span>
                            </div>
                            <div className="detailRuntime">
                                <span>Runtime : </span>
                                <span>{details.runtime} min</span>
                            </div>
                            <div className="detailDate">
                                <span>Release Date : </span>
                                <span>{details.release_date}</span>
                            </div>
                            <div className="detailVote">{details.vote_average} / 10</div>
                            <div className="detailOverviewTitle">Overview</div>
                            <div className="detailOverview">{details.overview}</div>
                        </div>
                    </div>
        </div>
    );
}
function MovieGenres({genre}) {

    return(
        <span>{genre} </span>
    );
}

export default MovieDetail;
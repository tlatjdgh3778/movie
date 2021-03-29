import React from "react";
import { faThumbsUp, faHeart, faSplotch, faPlay } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoodMovie from './GoodMovie';

function FilterNav({filterBtn}) {

    const onClick = (e) => {
        if(e.target.nodeName==='BUTTON'||e.target.nodeName==='DIV'){
            filterBtn(e.target.className);
        }else{
            if(e.target.nodeName==='svg'){
                filterBtn(e.target.parentNode.className);
                // path
            }else{
                filterBtn(e.target.parentNode.parentNode.className);
            }
        }
    }
    return(
        <>
            <div className="navContainer">
                <button onClick={onClick} className="popular">
                    <FontAwesomeIcon icon={faThumbsUp}/>
                    <div className="popular">인기</div>
                </button>
                <button onClick={onClick} className="top_rated">
                    <FontAwesomeIcon icon={faSplotch}/>
                    <div className="top_rated">좋은평가</div>
                    {/* <div className="top_rated">Rated</div> */}
                </button>           
                <button onClick={onClick} className="now_playing">
                    <FontAwesomeIcon icon={faPlay}/>
                    <div className="now_playing">상영중</div>
                    {/* <div className="now_playing">Playing</div> */}
                </button>
                <button onClick={onClick} className="good">
                    <FontAwesomeIcon icon={faHeart}/>
                    <div className="good">좋아요</div>
                </button>
            </div>
        </>
    );
} 

export default FilterNav;
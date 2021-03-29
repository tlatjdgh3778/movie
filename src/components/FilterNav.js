import React from "react";
import { faThumbsUp, faFire, faSplotch, faPlay } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FilterNav({filterBtn}) {

    const onClick = (e) => {
        if(e.target.nodeName==='BUTTON'||e.target.nodeName=='DIV'){
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
            <div className="NavContainer">
                <button onClick={onClick} className="popular">
                    <FontAwesomeIcon icon={faThumbsUp}/>
                    <div className="popular">Popular</div>
                </button>
                <button onClick={onClick} className="top_rated">
                    <FontAwesomeIcon icon={faSplotch}/>
                    <div className="top_rated">Top</div>
                    <div className="top_rated">Rated</div>
                </button>           
                <button onClick={onClick} className="now_playing">
                    <FontAwesomeIcon icon={faPlay}/>
                    <div className="now_playing">Now</div>
                    <div className="now_playing">Playing</div>
                </button>
            </div>
        </>
    );
} 

export default FilterNav;
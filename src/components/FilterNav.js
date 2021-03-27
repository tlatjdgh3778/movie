import React from "react";
import { faThumbsUp, faFire, faSplotch, faPlay } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FilterNav({onFilterBtn}) {
    const onClick = (e) => {
        if(e.target.nodeName==='BUTTON'||e.target.nodeName=='DIV'){
            onFilterBtn(e.target.className);
        }else{
            if(e.target.nodeName==='svg'){
                onFilterBtn(e.target.parentNode.className);
            }else{
                onFilterBtn(e.target.parentNode.parentNode.className);
            }
        }
        //onFilterBtn(e);
    }
    return(
        <>
            <div className="NavContainer">
                    <button onClick={onClick} className="popular"><FontAwesomeIcon icon={faThumbsUp}/><div className="popular">Popular</div></button>
                    <button onClick={onClick} className="top_rated"><FontAwesomeIcon icon={faSplotch}/><div className="top_rated">Top Rated</div></button>           
                    <button onClick={onClick} className="now_playing"><FontAwesomeIcon icon={faPlay}/><div className="now_playing">Now Playing</div></button>
            </div>
        </>
    );
} 

export default FilterNav;
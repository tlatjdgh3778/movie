import React, { useState } from "react";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GoodMovie({storageKey, deleteGood}){

    const id = JSON.parse(localStorage.getItem(storageKey)).id;
    const poster_img = JSON.parse(localStorage.getItem(storageKey)).poster_img;
    const title = JSON.parse(localStorage.getItem(storageKey)).title;

    const cancleClick = (e) => {
        localStorage.removeItem(id);
        deleteGood();
    }
    return(
        <div className="movies">
            <img className="moviePoster" src={poster_img} alt={title}></img>
            <div className="movieTitle">
                <p>{title}</p>
            </div>
            <button className="deleteButton" onClick={cancleClick}><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
    );
} 

export default GoodMovie;

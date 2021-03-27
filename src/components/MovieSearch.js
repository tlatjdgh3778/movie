import React, {useState} from "react";
import { faSearch, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieSearch({searchData, closeDetail}) {

    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    
    const onClick = (e) => {
        e.preventDefault();
        searchData(text);
        setText('');
        
    }

    return(
        <>
        <div className="HeaderContainer">
            <button className="logo"><FontAwesomeIcon icon={faTicketAlt}/></button>
            <form className="headerSearch">
                <input onChange={onChange} type="text" value={text} placeholder="Search movie..."></input>
                <button onClick={onClick} ><FontAwesomeIcon icon={faSearch}/></button>
                
            </form>
        </div>
        </>
    );
}

export default MovieSearch;
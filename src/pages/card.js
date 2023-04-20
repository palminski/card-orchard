import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";



function Card() {

    const [idInput, setIdInput] = useState({id:""});

    const { id: cardId } = useParams();

    function handleFormChange(e) {
        setIdInput({id: e.target.value});
    }

    return (
        <>
            <h1>card Page</h1>
            {cardId ?
                <>
                    <h2>Current Card Being Viewed : {cardId}</h2>
                </>
                :
                <>
                    <h2>Search for a card below!</h2>
                        <form>
                        <input placeholder="Enter Card's Id" onChange={handleFormChange}></input>
                        <Link to={`/card/${idInput.id}`}><button>Search</button></Link>
                        </form>
                        
                    
                </>
            }
        </>
    )
}

export default Card;
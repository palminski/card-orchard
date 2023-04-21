import { useParams } from "react-router-dom";
import { useState } from "react";
import IdSearch from "../components/IdSearch";
import cards from "../cards/index.js";


function Card() {


    const [front, setFront] = useState(true);
    const { id: cardId } = useParams();
    const card = cards.find(card => card.id === parseInt(cardId))

    const toggleSide = () => {
        setFront(!front);
    }

    return (
        <>

            {cardId ?
                <>
                    {card ?
                        <>
                            <h2>{card.name}</h2>
                            <h4>card id: {card.id}</h4>
                            <img src={front ? card.frontImage : card.backImage} onClick={toggleSide}></img>
                            
                            <h4>Description</h4>
                        </>
                        :
                        <>
                            <h2>No Card Found with Id {cardId}</h2>
                        </>}

                    <h5>Find another card below</h5>
                    <IdSearch />
                </>
                :
                <>
                    <h2>Search for a card below!</h2>
                    <IdSearch />
                </>
            }

        </>
    )
}

export default Card;
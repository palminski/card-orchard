import { useParams } from "react-router-dom";
import IdSearch from "../components/IdSearch";
import cards from "../cards/index.js";


function Card() {



    const { id: cardId } = useParams();
    const card = cards.find(card => card.id === parseInt(cardId))


    return (
        <>

            {cardId ?
                <>
                    {card ?
                        <>
                            <h2>{card.name}</h2>
                            <h4>card id: {card.id}</h4>
                            <img src={card.frontImage}></img>
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
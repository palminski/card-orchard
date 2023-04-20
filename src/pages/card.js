import { useParams } from "react-router-dom";
import IdSearch from "../components/IdSearch";



function Card() {

    

    const { id: cardId } = useParams();

    

    return (
        <>
            <h1>card Page</h1>
            {cardId ?
                <>
                    <h2>Current Card Being Viewed : {cardId}</h2>
                    <div>
                        <h1>THIS WILL CONTAIN INFO ABOUT THE CARD</h1>
                    </div>
                    <h5>Find another card below</h5>
                    <IdSearch/>
                </>
                :
                <>
                    <h2>Search for a card below!</h2>
                    <IdSearch/>
                </>
            }

        </>
    )
}

export default Card;
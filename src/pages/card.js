import { useParams } from "react-router-dom";

function Card() {

    const { id: cardId } = useParams();

    return (
        <>
            <h1>card Page</h1>
            {cardId ?
             <h2>Current Card Being Viewed : {cardId}</h2>
            :
            <h2>No Card ID searched for</h2>}
            <h3>This page will display an image and information about a card based on the ID included in the URL. Right now test link will go to a page containing the id "CARDNAME-TESTID-00000000" but you can try typing any "id" into the searchbar for now for now</h3>
            
            
        </>
    )
}

export default Card;
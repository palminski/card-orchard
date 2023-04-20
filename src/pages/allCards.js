import cards from "../cards/index.js";

console.log(cards);
function AllCards() {
    return (
        <>
        <h1>All Cards Page</h1>
        <h2>Page with a list of all my cards.</h2>
        <hr></hr>
        <ul>
            
            {cards.map((card,i)=>(
                <li key={i}>
                    <img src={card.frontImage} alt={card.imageAlt}></img>
                    <h3>Name: {card.name}</h3>
                    <h3>{i} - Card Id: {card.id}</h3>

                </li>
            ))}
        </ul>
        </>
    )
}

export default AllCards;
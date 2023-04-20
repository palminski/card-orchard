import { Link } from 'react-router-dom';
import { useState } from 'react';

function IdSearch() {
    const [idInput, setIdInput] = useState({ id: "" });
    function handleFormChange(e) {
        setIdInput({ id: e.target.value });
    }
    return (
        <form>
            <input placeholder="Enter Card's Id" onChange={handleFormChange}></input>
            <Link to={`/card/${idInput.id}`}><button>Search</button></Link>
        </form>
    )
}

export default IdSearch;


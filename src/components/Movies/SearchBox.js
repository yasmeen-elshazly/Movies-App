import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForMovie() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    function movieTitle(event) {
        setTitle(event.target.value);
    }

    function handleSearch() {
        navigate(`/search?query=${title}`);
        setTitle('');
    }

    return (
        <div style={{ fontFamily: "cursive", backgroundColor: "rgb(235, 235, 235)", padding: "30px", borderRadius: "15px" }}>
            <h3 style={{ fontWeight: "bolder", color: "black", marginBottom: "20px" }}>Welcome to our Movie App</h3>
            <p style={{ marginBottom: "20px" }}>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input className="form-control" type="text" placeholder="Search for movies" value={title} onChange={movieTitle}
                    style={{ borderRadius: "10px", border: "none" }} />
                <button className="btn" onClick={handleSearch}
                    style={{ borderRadius: "10px", backgroundColor: "rgb(124, 124, 224)", color: "white", marginLeft: "10px" }}>Search</button>
            </div>
        </div>
    );
}

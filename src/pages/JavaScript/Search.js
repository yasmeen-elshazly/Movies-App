import React, { useState, useEffect } from "react";
import MovieCardVertical from "../../components/Movies/MovieCardVertical";
import SearchBox from "../../components/Movies/SearchBox";
import { useSearchParams } from 'react-router-dom';
import axiosCreate from "../../axios/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./../Styles/Search.css"

export default function Search() {
    const [params] = useSearchParams();
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const query = params.get('query');

        if (!query) {
            setFilteredMovies([]);
            return;
        }
        axiosCreate
            .get(
                `/search/movie`, {
                params: {
                    query: query,
                    api_key: `29778397f5ef6b649f6ab8f928ea5d0c`
                }
            }
            )
            .then((response) => {
                setFilteredMovies(response.data.results);
            })
            .catch((error) => console.error("Error fetching movies:", error));
    }, [params]);

    return (
      <>
        <SearchBox />
        {filteredMovies.length !== 0 ? (
          <div
            className="row row-cols-1 row-cols-md-6 g-4"
            style={{ marginTop: "20px" }}
          >
            {filteredMovies.map((movie) => (
              <MovieCardVertical key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <FontAwesomeIcon icon={faEyeSlash} class={"custom-icon"} />
            <h4 class={"custom-heading"}>No Movies Found</h4>
          </div>
        )}
      </>
    );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { addMovie, removeMovie } from "../../store/Slices/watchlist";
import { NavLink } from "react-router-dom";

export default function MovieCardHorizontal(props) {
  const [liked, setLiked] = useState(false); // Initialize liked state as false
  const watchList = useSelector((state) => state.watchList.watchListValues);
  const dispatch = useDispatch();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    // Check if the movie is in the watchlist and update liked state accordingly
    if (watchList.some((movie) => movie.id === props.movie.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [props.movie, watchList]);

  function handleWatchList() {
    if (liked) {
      dispatch(removeMovie(props.movie.id));
    } else {
      dispatch(addMovie(props.movie));
    }
  }

  // Calculate the scaled vote average (capped at 5)
  const scaledVote = props.movie.vote_average
    ? props.movie.vote_average / 2
    : 0;

  return (
    <div className="col-md-8">
      <div className="card-body">
        <div className="d-flex">
          <NavLink to={`../details/${props.movie.id}`}>
            <h3 className="card-title" style={{ fontWeight: "bolder" }}>
              {props.movie.title}
            </h3>
          </NavLink>
          <FontAwesomeIcon
            className="fontAwesome"
            icon={liked ? faHeartSolid : faHeartRegular}
            onClick={handleWatchList}
            style={{
              color: liked ? "rgb(124, 124, 224)" : "lightgray",
              scale: "1.2",
            }}
          />
        </div>
        {props.movie.release_date && (
          <p className="card-text">
            <small className="text-body-secondary">
              {months[new Date(props.movie.release_date).getMonth()]}{" "}
              {new Date(props.movie.release_date).getDate()},{" "}
              {new Date(props.movie.release_date).getFullYear()}
            </small>
          </p>
        )}
        <div className="d-flex my-2">
          <div>
            {/* Render full stars (capped at 5) */}
            {scaledVote % 1 !== 0 &&
              Array(Math.floor(scaledVote))
                .fill()
                .map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-warning "
                  />
                ))}

            {/* Render half star if needed */}
            {scaledVote % 1 !== 0 && (
              <FontAwesomeIcon
                key="half"
                icon={faStarHalfAlt}
                className="text-warning"
              />
            )}

            {/* Render empty stars if needed */}
            {Array(Math.floor(5 - scaledVote))
              .fill()
              .map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-warning opacity-25"
                />
              ))}
          </div>
          <span className="text-muted me-2 mx-2">
            {Number(props.movie.vote_count?.toFixed(1)) || 0}
          </span>
        </div>
        <p className="card-text">{props.movie.overview}</p>
      </div>
    </div>
  );
}

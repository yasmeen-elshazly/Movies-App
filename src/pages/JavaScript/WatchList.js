import { useSelector } from "react-redux";
import MovieCardHorizontal from "../../components/Movies/MovieCardHorizontal";
function WatchList() {
  const watchList = useSelector((state) => state.watchList.watchListValues);

  return (
    <div className="row row-cols-md-2 d-flex justify-content-center">
      {watchList.map((movie) => {
        return (
          <div
            className="card m-2"
            style={{ maxWidth: "550px", borderRadius: "20px" }}
          >
            <div className="row">
              <div className="col-md-4 p-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img"
                  alt={movie.title}
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <MovieCardHorizontal key={movie.id} movie={movie} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default WatchList;

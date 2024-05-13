import { Routes, Route } from "react-router-dom";
import Home from "./../pages/JavaScript/Home";
import WatchList from "../pages/JavaScript/WatchList";
import Details from "../pages/JavaScript/Details";
import NotFound from "../pages/JavaScript/NotFound";
import Search from "../pages/JavaScript/Search";
import Registertion from "../pages/JavaScript/Registertion";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/search" element={<Search />} />
      <Route path="/registertion" element={<Registertion />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesConfig;

// import RecommendationsRow from "../components/RecommendationsRow";
import FavouritesRow from "../components/FavouritesRow";
import RecentsRow from "../components/RecentsRow";

export default function Home() {
  return (
    <>
      <h3> Favourites </h3>
      <FavouritesRow />
      <br />
      <br />
      <br />
      <h3> Recents </h3>
      <RecentsRow />
      {/* <h3> Recommendations </h3> */}
      {/* <RecommendationsRow /> */}
    </>
  );
}

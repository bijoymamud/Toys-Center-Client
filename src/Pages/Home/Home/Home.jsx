import Reviews from "../../CustomesRe/Reviews";
import Gallery from "../../Gallery/Gallery";
import ConnectUs from "../../GiveMessage/ConnectUs";
import Tabls from "../../Tabs/Tabls";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Gallery></Gallery>
      <Tabls></Tabls>
      <Reviews></Reviews>
      <ConnectUs></ConnectUs>


    </div>
  );
};

export default Home;
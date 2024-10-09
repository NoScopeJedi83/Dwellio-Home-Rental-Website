import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import { useSelector } from "react-redux"
import Footer from "../components/Footer";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  console.log("User in HomePage:", user); // Check the user state

  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  );
}

export default HomePage
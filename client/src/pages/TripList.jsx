import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import { differenceInDays } from "date-fns"; // Importing date-fns
import Footer from "../components/Footer";
const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const tripList = useSelector((state) => state.user.tripList);

  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetching Trip List failed!", err.message);
    }
  };

  useEffect(() => {
    getTripList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(
          ({
            listingId,
            hostId,
            startDate,
            endDate,
            booking = true,
          }) => {
            // Calculate number of nights
            const numOfNights = differenceInDays(new Date(endDate), new Date(startDate));
            // Calculate total price
            const totalPrice = listingId.price * numOfNights;

            return (
              <ListingCard
                key={listingId._id}
                listingId={listingId._id}
                creator={hostId._id}
                listingPhotoPaths={listingId.listingPhotoPaths}
                city={listingId.city}
                province={listingId.province}
                country={listingId.country}
                category={listingId.category}
                startDate={startDate}
                endDate={endDate}
                totalPrice={totalPrice} // Pass the calculated total price
                price={listingId.price} // Pass nightly price
                booking={booking}
              />
            );
          }
        )}
      </div>
      <Footer />
    </>
  );
};

export default TripList;

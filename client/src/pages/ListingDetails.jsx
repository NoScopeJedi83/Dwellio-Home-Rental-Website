import { useEffect, useState } from "react";
import "../styles/ListingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { enUS } from 'date-fns/locale';
import Footer from "../components/Footer";

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const getListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/properties/${listingId}`);
        const data = await response.json();
        console.log("Fetched Listing Data:", data); // Logging fetched data
        setListing(data);
        setLoading(false);
      } catch (err) {
        console.log("Fetch Listing Details Failed", err.message);
      }
    };
    getListingDetails();
  }, [listingId]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));

  const navigate = useNavigate();
  const customerId = useSelector((state) => state?.user?._id);

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        listingId,
        hostId: listing.creator._id,
        startDate: dateRange[0].startDate.toDateString(),
        endDate: dateRange[0].endDate.toDateString(),
        totalPrice: listing.price * dayCount,
      };

      const response = await fetch("http://localhost:3001/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      if (response.ok) {
        navigate(`/${customerId}/trips`);
      }
    } catch (err) {
      console.log("Submit Booking Failed.", err.message);
    }
  };

  return loading ? (
    <Loader />
  ) : listing ? ( // Check if listing exists
    <>
      <Navbar />
      <div className="listing-details">
        <div className="title">
          <h1>{listing.title}</h1>
        </div>

        <div className="photos">
          {listing.listingPhotoPaths?.map((item, index) => (
            <img
              key={index}
              src={`http://localhost:3001/${item.replace("public", "")}`}
              alt="listing"
            />
          ))}
        </div>

        <h2>
          {listing.type} in {listing.city}, {listing.province}, {listing.country}
        </h2>
        <p>
          {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) - {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
        </p>

        <hr />

        <div className="profile">
          <img
            src={`http://localhost:3001/${listing.creator.profileImagePath.replace("public", "")}`}
            alt="host"
          />
          <h3>Hosted by {listing.creator.firstName} {listing.creator.lastName}</h3>
        </div>

        <hr />

        <h3>Description</h3>
        <p>{listing.description}</p>

        <hr />

        <h3>{listing.highlight}</h3>
        <p>{listing.highlightDesc}</p>

        <hr />

        <div className="booking">
          <div>
            <h2>What this place offers?</h2>
            <div className="amenities">
              {listing.amenities[0].split(",").map((item, index) => (
                <div className="facility" key={index}>
                  <div className="facility_icon">
                    {facilities.find((facility) => facility.name === item)?.icon}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>How long do you want to stay?</h2>
            <div className="date-range-calendar">
              <DateRange
                locale={enUS}
                ranges={dateRange}
                onChange={handleSelect}
              />
              <h2>
                ₹{listing.price} x {dayCount} {dayCount > 1 ? "nights" : "night"}
              </h2>
              <h2>Total price: ₹{listing.price * dayCount}</h2>
              <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
              <p>End Date: {dateRange[0].endDate.toDateString()}</p>

              <button className="button" type="submit" onClick={handleSubmit}>
                BOOKING
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <div>Listing not found!</div> // Handle case where listing is not found
  );
};

export default ListingDetails;

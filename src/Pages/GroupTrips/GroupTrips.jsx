import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './GroupTrips.module.css';
import SkeletonImage from './components/Itenary/SkeletonImage';
import NavBar from '../HomePage/component/Hero/NavBar/NavBar';
import Footer from '../HomePage/component/Footer/Footer';

const GroupTripPage = ({ groupTripsData }) => {
  const { location } = useParams();
  const tripData = groupTripsData[location.toLowerCase()];

  // for itinerary dropdown
  const [openDays, setOpenDays] = useState([]);

  // for policies dropdown
  const [showBookingPolicy, setShowBookingPolicy] = useState(false);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);
  const [showGeneralPolicy, setShowGeneralPolicy] = useState(false);

  // Toggle function for opening/closing each day
  const toggleDay = (day) => {
    setOpenDays((prevOpenDays) =>
      prevOpenDays.includes(day)
        ? prevOpenDays.filter((d) => d !== day)
        : [...prevOpenDays, day]
    );
  };

  // Get the image sources from tripData
  const imageSources = tripData ? tripData.images : [];

  return (
    <>
      <NavBar />
      <div className={style.GroupTripPage}>
        {/* SkeletonImage with passed image sources */}
        <SkeletonImage images={imageSources} />

        {tripData ? (
          <>
            <h1>{tripData.title}</h1>
            <p>{tripData.description}</p>

            <h2>Itinerary</h2>
            <ul className={style.itineraryList}>
              {tripData.itinerary.map((item, index) => (
                <li key={index} className={style.itineraryItem}>
                  <div
                    className={style.itineraryDay}
                    onClick={() => toggleDay(item.day)}
                  >
                    Day {item.day}: {item.title}
                  </div>
                  {openDays.includes(item.day) && (
                    <ul className={style.activitiesList}>
                      {item.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>{activity}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Policies Section */}
            <div className={style.policiesSection}>
              <h2 onClick={() => setShowBookingPolicy(!showBookingPolicy)}>
                Booking Policy {showBookingPolicy ? '-' : '+'}
              </h2>
              {showBookingPolicy && (
                <p>
                  Book your seats by depositing an advance of 50% per head to the below account, and the rest has to be paid 1 day prior to the time of departure of the trip. <br />
                  Send the payment screenshot to the numbers provided. Once the form is filled and the payment is confirmed, your booking will be finalized. <br />
                  If you want to book any specific seat in the traveler, you have to pay an additional Rs.300/- for the seat, subject to availability and on a first-come, first-served basis.
                </p>
              )}

              <h2 onClick={() => setShowCancellationPolicy(!showCancellationPolicy)}>
                Cancellation Policy {showCancellationPolicy ? '-' : '+'}
              </h2>
              {showCancellationPolicy && (
                <p>
                  If cancellations are made 60-30 days before the trip's start date, 10% of the total tour cost will be charged as cancellation fees. <br />
                  If cancellations are made 30 days before the trip's start date, 50% of the total tour cost will be charged as cancellation fees. <br />
                  If cancellations are made within 0-30 days before the trip's start date, 100% of the total tour cost will be charged. <br />
                  In case of unforeseen weather conditions or government restrictions, certain activities may be canceled, and an alternate activity will be provided. However, no refund will be offered in such cases.
                </p>
              )}

              <h2 onClick={() => setShowGeneralPolicy(!showGeneralPolicy)}>
                General Policy {showGeneralPolicy ? '-' : '+'}
              </h2>
              {showGeneralPolicy && (
                <p>
                  BtechTravelWala and its organizers strictly prohibit the utilization of any narcotics or banned substances during the tour. <br />
                  The trip amount is based on a quad-sharing basis. An extra mattress will be provided for any additional persons. <br />
                  Fireworks, weapons, or toxic substances are not allowed. The organizers reserve the right to evict anyone found violating this rule without any refund. <br />
                  BtechTravelWala is not responsible for your safety or whereabouts outside of the resort premises. <br />
                  In case of transport breakdown, there will be no backup provided. You will have to wait until the vehicle is repaired. <br />
                  All guests must carry a valid government-issued ID card. <br />
                  Please cooperate with us to keep the environment clean and safe. <br />
                  Any loss of resort property will incur a full charge for the damaged items. <br />
                  No refund or cancellation is allowed once tickets or bookings are confirmed. <br />
                  Bonfire and musical nights are subject to local authority regulations.
                </p>
              )}
            </div>
          </>
        ) : (
          <div>Trip data not found.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GroupTripPage;

import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import TrandingSlider from "./Pages/HomePage/component/TrandingSlider/TrandingSlider";
import BlogPostPage from "./Pages/HomePage/component/BlogPostpage/BlogPostPage";
import PersonalisedTrips from "./Pages/PersonalisedTrips/PersonalisedTrips";
import GroupTripPage from "./Pages/GroupTrips/GroupTrips"; 
import ScrollToTop from "./ScrollToTop";
import CorporatePage from "./Pages/CorporatePage/CorporatePage";

// JSON object containing trip details
const groupTripsData = {
  pachmarhi: {
    title: "Pachmarhi – The Queen of Satpura",
    description: `
      Embark on an enchanting group trip to Pachmarhi, lovingly known as "The Queen of Satpura," with Btech TravelWala as your trusted companion. 
      This picturesque destination, nestled within the Satpura Range in central India, promises a breathtaking journey through lush forests, serene waterfalls, and awe-inspiring viewpoints. 
      We take care of all the details, ensuring a seamless and enjoyable experience for you and your fellow travellers. 

      The adventure begins with a lively pool party with a DJ at our resort, setting the tone for relaxation and camaraderie. 
      A gypsy safari into the wilds of Satpura offers thrilling encounters with diverse wildlife and the region's natural beauty. 
      As the sun sets, our music night under the starlit sky provides the perfect backdrop for dancing, live performances by group members, group games, and creating cherished memories. 

      Throughout your stay, you'll partake in activities like nature walks, sightseeing, and visiting iconic spots such as Bee Fall, Dhoopgarh, Jata Shankar, and the beautiful trek to Chouragarh Mahadev. 
      Let us lead you on this captivating journey to Pachmarhi, where "The Queen of Satpura" is ready to steal your heart, and you can focus on making unforgettable memories.`,
    itinerary: [
      {
        day: 1,
        title: "Departure from Indore",
        activities: [
          "10:00 PM: Departure from Indore (Reddision Square).",
          "3:30 AM: Pickup from Bhopal (Lal Ghati & ISBT).",
          "6:00 AM: Pickup from Pipariya.",
          "Overnight bus journey with group meet-up, interaction, and introductions."
        ]
      },
      {
        day: 2,
        title: "Arrival at Pachmarhi | Satpura Exploration",
        activities: [
          "8:00 AM: Arrival at Pachmarhi, freshen up, and enjoy a hearty breakfast.",
          "Check-in: Complete check-in process at the hotel.",
          "Sightseeing: Begin with a trek to Chauragarh Mahadev, followed by visits to Bada Mahadev, Gupt Mahadev, Green Valley, and Pachmarhi Lake.",
          "Evening: Pool party, music night, and group activities at the resort.",
          "Dinner: Delicious dinner at the resort, followed by an overnight stay."
        ]
      },
      {
        day: 3,
        title: "Gypsy Safari | Waterfalls | Sunset Point",
        activities: [
          "Morning: Wake-up call, breakfast, and check-out from the resort.",
          "Adventure Day: A thrilling gypsy safari exploring Jata Shankar, Pandav Caves, Ramya Kund, Bee Fall, Jal Gali, Reechgarh, Adbhut Drashya, and Forest Museum.",
          "Dhoopgarh: Conclude the day with a sunset view from the highest point in Satpura.",
          "Evening: Dinner and prepare for an overnight return journey."
        ]
      },
      {
        day: 4,
        title: "Return Journey | Arrival at Home",
        activities: [
          "2:00 AM: Arrival in Bhopal.",
          "6:30 AM: Arrival in Indore. The trip ends, but memories last forever!"
        ]
      }
    ],
    images: [
      "https://t4.ftcdn.net/jpg/https://t3.ftcdn.net/jpg/08/89/64/78/240_F_889647897_rPrpC40CieDETAco3Ahikp2xvhpMXWfn.jpg/95/32/37/240_F_895323772_yzvVND6WWEoRtqvxM6C4Ug3syTWlQ3fG.jpg",
      "https://t3.ftcdn.net/jpg/03/52/43/04/240_F_352430463_uuCQ17Ylpj3AEzwYME5aYdlNlSTI39uo.jpg",
      "https://encrypted-tbn0.gstatic.com/imagehttps://t3.ftcdn.net/jpg/08/89/64/80/240_F_889648060_HHmATuvnRNKdbHjGpyRG2JhNGWMZMdLV.jpgs?q=tbn:ANd9GcQNk6AEkxo1Z1lbp6o6viaoS8HiroPrkJ1LOOFMIJ016jNVrim3mO0TCCmMhSI_Yx7Bjf0&usqp=CAU",
      "https://t4.ftcdn.net/jpg/04/51/47/71/240_F_451477199_hbq8ViM3mD41otBIRRylSMMprNkbeUuo.jpg"
    ]
  },

  kerala: {
    title: "Kerala – God's Own Country",
    description: `
      Experience the enchanting beauty of Kerala on a delightful group trip with Btech TravelWala as your reliable guide. 
      Renowned for its lush landscapes, serene backwaters, and rich cultural heritage, Kerala is truly a paradise waiting to be explored. 
      We ensure all your travel logistics are taken care of so you can focus on enjoying the journey.

      Start your adventure in Munnar, exploring its famed tea gardens and breathtaking natural beauty. 
      A memorable overnight houseboat cruise through the tranquil backwaters of Alleppey awaits you, filled with delicious local cuisine and group activities. 
      As the sun sets, unwind with a bonfire on the beach, complete with local music and cultural experiences, while creating lasting bonds with fellow travellers.

      From relaxing beach days at Varkala to exploring the vibrant markets of Cochin, every moment in Kerala will be a cherished memory. 
      Join Btech TravelWala for an unforgettable journey through God's Own Country!`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Kerala",
        activities: [
          "Evening: Departure from your location to Cochin by train/flight, meet your fellow travelers.",
          "Overnight journey."
        ]
      },
      {
        day: 2,
        title: "Arrival in Cochin | Munnar Exploration",
        activities: [
          "Morning: Arrival in Cochin, and transfer to Munnar.",
          "Afternoon: Check-in to your resort, visit Munnar Tea Gardens and Eravikulam National Park.",
          "Evening: Group bonfire with local music and cultural activities.",
          "Overnight Stay: Stay at the resort."
        ]
      },
      {
        day: 3,
        title: "Alleppey Houseboat | Backwaters",
        activities: [
          "Morning: Drive to Alleppey for an overnight houseboat cruise through the serene backwaters.",
          "Afternoon: Enjoy local Kerala delicacies onboard and participate in group activities.",
          "Evening: Dinner and night stay on the houseboat."
        ]
      },
      {
        day: 4,
        title: "Varkala Beach | Kovalam",
        activities: [
          "Morning: Post breakfast, check-out and drive to Varkala Beach for a relaxing beach day.",
          "Afternoon: Head to Kovalam for beach time and sunset views.",
          "Evening: Return to Cochin for a final group dinner."
        ]
      },
      {
        day: 5,
        title: "Departure from Kerala",
        activities: [
          "Morning: Check out from your hotel and transfer to Cochin for departure.",
          "The Kerala trip ends, but memories remain everlasting!"
        ]
      }
    ],
    images: [
      "kerala-pic1.jpg",
      "kerala-pic2.jpg",
      "kerala-pic3.jpg",
      "kerala-pic4.jpg"
    ]
  },

  goa: {
    title: "Goa – The Pearl of the Indian Ocean",
    description: `
      Embark on an exhilarating group trip to Goa, the vibrant coastal paradise, with Btech TravelWala as your trusted companion. 
      This tropical destination, famous for its golden beaches, lively nightlife, and rich cultural heritage, promises an unforgettable adventure. 
      We handle all the logistics, ensuring a seamless and enjoyable experience for you and your fellow travellers.

      Start the trip with a beachside bonfire and DJ party, setting the mood for fun and relaxation. 
      Indulge in thrilling water sports, explore the local markets, and soak up the sun on Goa's pristine beaches. 
      As the night falls, join us for a musical night under the stars, complete with group games, dancing, and live performances by the group. 

      Enjoy sightseeing tours to iconic spots such as Baga Beach, Dudhsagar Waterfalls, Fort Aguada, and the ancient churches of Old Goa. 
      Let Btech TravelWala guide you through this exciting journey, where Goa’s vibrant charm and your newfound friendships will create lasting memories.`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Goa",
        activities: [
          "Evening: Departure from your location to Goa by train/flight, group interaction, and introductions.",
          "Overnight journey to Goa."
        ]
      },
      {
        day: 2,
        title: "Arrival in Goa | Beach Day",
        activities: [
          "Morning: Arrival in Goa, check-in to your beachside resort, and freshen up.",
          "Beach Time: Spend the day relaxing at Baga Beach with beachside fun, sports, and a DJ beach party.",
          "Evening: Bonfire by the beach with group games, live performances, and dinner at the beach shack.",
          "Overnight Stay: Stay at the resort."
        ]
      },
      {
        day: 3,
        title: "Water Sports | Old Goa Tour",
        activities: [
          "Morning: Post-breakfast, engage in water sports such as parasailing, jet skiing, and banana boat rides.",
          "Sightseeing: Explore Old Goa, visit Basilica of Bom Jesus, Se Cathedral, and Fort Aguada.",
          "Evening: Return to the resort for a themed dinner and live music night by the beach."
        ]
      },
      {
        day: 4,
        title: "Dudhsagar Waterfall | Goa Market Exploration",
        activities: [
          "Morning: After breakfast, head out to visit the majestic Dudhsagar Waterfall and enjoy a swim.",
          "Afternoon: Return to explore Goa's local markets like Anjuna Flea Market and Calangute Market.",
          "Evening: Final group dinner, enjoy the nightlife, and party at Tito’s Lane."
        ]
      },
      {
        day: 5,
        title: "Departure from Goa",
        activities: [
          "Morning: Check out from the resort, quick souvenir shopping, and transfer to the station/airport for departure.",
          "The trip ends, but the fun memories of Goa last a lifetime!"
        ]
      }
    ],
    images: [
      "goa-pic1.jpg",
      "goa-pic2.jpg",
      "goa-pic3.jpg",
      "goa-pic4.jpg"
    ]
  },

  ladakh: {
    title: "Ladakh – The Land of High Passes",
    description: `
      Discover the rugged beauty of Ladakh on an unforgettable group trip with Btech TravelWala as your expert guide. 
      Known for its stunning landscapes, high-altitude deserts, and serene monasteries, Ladakh offers a truly unique adventure. 
      Btech TravelWala will handle all the details, ensuring a stress-free and enjoyable journey for you and your companions.

      Kick off your trip with a welcome bonfire at your Leh guesthouse, creating a warm atmosphere of camaraderie. 
      Experience the thrill of a guided bike tour across some of the world’s highest motorable passes, including Khardung La. 
      As night falls, unwind with a music night under Ladakh’s famously clear starlit sky, complete with group activities and live performances by your fellow travellers.

      During your stay, explore iconic sites like Pangong Lake, Nubra Valley, and the Magnetic Hill. 
      Let Btech TravelWala lead you through this awe-inspiring region, where every moment in the "Land of High Passes" will become a cherished memory.`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Ladakh",
        activities: [
          "Morning: Flight to Leh. Arrival and transfer to your guesthouse. Rest and acclimatize.",
          "Evening: Welcome bonfire and group meet-up with introductions.",
          "Overnight Stay: Stay at the guesthouse in Leh."
        ]
      },
      {
        day: 2,
        title: "Leh City Tour | Shanti Stupa",
        activities: [
          "Morning: Post-breakfast, explore Leh Palace, Shanti Stupa, and Magnetic Hill.",
          "Afternoon: Visit the iconic Hemis Monastery and Thiksey Monastery.",
          "Evening: Dinner at the guesthouse, with group activities and stargazing under Ladakh's clear sky."
        ]
      },
      {
        day: 3,
        title: "Khardung La Pass | Nubra Valley",
        activities: [
          "Morning: Early departure for Khardung La, one of the highest motorable roads in the world.",
          "Afternoon: Head to Nubra Valley, visit Diskit Monastery, and ride Bactrian camels at the sand dunes of Hunder.",
          "Evening: Return to Leh, dinner, and overnight stay."
        ]
      },
      {
        day: 4,
        title: "Pangong Lake Excursion",
        activities: [
          "Morning: Depart for Pangong Lake, enjoy the scenic drive and picturesque landscapes.",
          "Day: Explore the stunning blue waters and surrounding mountains of Pangong Lake.",
          "Evening: Return to Leh, farewell dinner with group sharing experiences and memories."
        ]
      },
      {
        day: 5,
        title: "Departure from Ladakh",
        activities: [
          "Morning: Check out from the guesthouse, quick souvenir shopping.",
          "Departure: Flight back home, concluding your memorable journey through Ladakh!"
        ]
      }
    ],
    images: [
      "ladakh-pic1.jpg",
      "ladakh-pic2.jpg",
      "ladakh-pic3.jpg",
      "ladakh-pic4.jpg"
    ]
  },

  kashmir: {
    title: "Kashmir – Paradise on Earth",
    description: `
      Experience the breathtaking beauty of Kashmir on an unforgettable group trip with Btech TravelWala as your expert guide. 
      Known for its stunning landscapes, lush gardens, and serene houseboats, Kashmir is a true paradise waiting to be explored. 
      We ensure all your travel logistics are taken care of, allowing you to focus on enjoying every moment.

      Begin your adventure on Dal Lake, where you'll stay on a traditional houseboat and enjoy a scenic shikara ride. 
      Explore the stunning meadows of Gulmarg, ride the Gondola for breathtaking views, and enjoy a bonfire night filled with Kashmiri folk music and local delicacies. 
      Spend a day in Pahalgam, experiencing the pristine Betaab Valley and indulging in thrilling pony rides through picturesque landscapes.

      From the beautiful Mughal Gardens of Srinagar to the vibrant local markets, every moment in Kashmir will create lasting memories. 
      Join Btech TravelWala for a mesmerizing journey through the Paradise on Earth!`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Kashmir",
        activities: [
          "Morning: Flight to Srinagar. Arrival and transfer to a traditional houseboat on Dal Lake.",
          "Evening: Group meet-up, shikara ride on Dal Lake, and dinner on the houseboat."
        ]
      },
      {
        day: 2,
        title: "Gulmarg Exploration",
        activities: [
          "Morning: Drive to Gulmarg, visit the meadows, and enjoy a Gondola ride for panoramic views of the Himalayas.",
          "Evening: Return to Srinagar for a bonfire night with Kashmiri folk music and dinner."
        ]
      },
      {
        day: 3,
        title: "Pahalgam",
        activities: [
          "Morning: Full-day excursion to Pahalgam, explore the Betaab Valley, and enjoy a pony ride through the meadows.",
          "Evening: Group dinner and overnight stay in Pahalgam."
        ]
      },
      {
        day: 4,
        title: "Mughal Gardens | Srinagar",
        activities: [
          "Morning: Visit the breathtaking Mughal Gardens of Srinagar (Nishat Bagh, Shalimar Bagh, and Chashme Shahi).",
          "Afternoon: Free time for shopping in Srinagar’s vibrant markets.",
          "Evening: Final group dinner at the houseboat."
        ]
      },
      {
        day: 5,
        title: "Departure from Srinagar",
        activities: [
          "Morning: Check out and transfer to Srinagar Airport for your return flight.",
          "Trip ends, but Kashmir's magic stays in your heart!"
        ]
      }
    ],
    images: [
      "kashmir-pic1.jpg",
      "kashmir-pic2.jpg",
      "kashmir-pic3.jpg",
      "kashmir-pic4.jpg"
    ]
  },


  manali: {
    title: "Manali – The Adventure Capital of India",
    description: `
      Join us on an exhilarating group trip to Manali, the adventure capital of India, with Btech TravelWala as your trusted travel partner. 
      Nestled in the breathtaking Himalayas, Manali is a paradise for thrill-seekers and nature lovers alike. 
      We take care of all the arrangements, ensuring a seamless and memorable experience for you and your fellow travellers.

      Kick off the trip with a welcome dinner at the resort, creating a sense of camaraderie among the group. 
      Experience a range of adventure activities, from paragliding to river rafting, along with stunning treks through lush forests. 
      As night falls, gather around a bonfire for a night of music, games, and sharing stories under the starry sky.

      During your stay, explore iconic attractions like Solang Valley, Rohtang Pass, Hadimba Temple, and more. 
      Let Btech TravelWala guide you through this beautiful journey, where every moment in Manali will be filled with excitement and unforgettable memories.`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Manali",
        activities: [
          "Evening: Departure from your location to Manali by bus, group introductions, and interactions.",
          "Overnight journey to Manali."
        ]
      },
      {
        day: 2,
        title: "Arrival in Manali | Adventure Activities",
        activities: [
          "Morning: Arrival in Manali, check-in at the resort, and freshen up.",
          "Adventure Day: Engage in adventure activities such as paragliding, zorbing, and trekking in Solang Valley.",
          "Evening: Welcome dinner and group activities at the resort."
        ]
      },
      {
        day: 3,
        title: "Rohtang Pass | Scenic Views",
        activities: [
          "Morning: Post-breakfast, head to Rohtang Pass for breathtaking views and snow activities.",
          "Day: Explore nearby areas and enjoy scenic views.",
          "Evening: Return to Manali, dinner, and bonfire night with music."
        ]
      },
      {
        day: 4,
        title: "Local Sightseeing | Hadimba Temple",
        activities: [
          "Morning: Visit Hadimba Temple, Vashisht Village, and the Manu Temple.",
          "Afternoon: Explore Mall Road for shopping and local delicacies.",
          "Evening: Farewell dinner, group sharing of experiences, and music night."
        ]
      },
      {
        day: 5,
        title: "Departure from Manali",
        activities: [
          "Morning: Check out from the resort, last-minute shopping, and departure back home.",
          "The trip ends, but the memories of Manali will last forever!"
        ]
      }
    ],
    images: [
      "manali-pic1.jpg",
      "manali-pic2.jpg",
      "manali-pic3.jpg",
      "manali-pic4.jpg"
    ]
  }
};



  const slideData = [
    {
      title: "Mystical Varanasi: A Journey to the Soul",
      description:
        "Experience the spiritual essence of Varanasi. Witness the Ganga Aarti on the ghats and immerse yourself in the city's deep-rooted traditions.",
      imgSrc: "/path/to/img1.jpg",
    },
    {
      title: "The Tranquility of Kerala's Backwaters",
      description:
        "Discover the peaceful backwaters of Kerala, where you can relax on a houseboat and enjoy the lush greenery and traditional village life along the waterways.",
      imgSrc: "/path/to/img2.jpg",
    },
    {
      title: "The Vibrant Streets of Mumbai",
      description:
        "Dive into the bustling life of Mumbai, India’s financial capital. From iconic landmarks like the Gateway of India to the vibrant street food scene.",
      imgSrc: "/path/to/img3.jpg",
    },
    {
      title: "Royal Heritage in Jaipur",
      description:
        " Explore the royal heritage of Jaipur, the Pink City. Visit grand palaces, majestic forts, and vibrant markets that reflect the rich history and culture of Rajasthan.",
      imgSrc: "/path/to/img4.jpg",
    },
    {
      title: "The Serenity of Himachal Pradesh",
      description:
        "Escape to the serene landscapes of Himachal Pradesh, where the mountains offer a perfect retreat. Enjoy trekking and breathe in the fresh mountain air",
      imgSrc: "/path/to/img5.jpg",
    },
    {
      title: "Exploring the Rann of Kutch",
      description:
        "Experience the unique beauty of the Rann of Kutch, where the white salt desert stretches as far as the eye can see. Visit during the Rann Utsav for cultural performances, handicrafts, and traditional cuisine.",
      imgSrc: "/path/to/img6.jpg",
    },
  ];
    

  function App() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personalised-trips" element={<PersonalisedTrips />} />
          <Route path="/corporate-trips" element={<div />} />
          <Route path="/group-trips/:location" element={<GroupTripPage groupTripsData={groupTripsData} />} /> {/* Route for group trips */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<TrandingSlider />} />
          <Route path="/blog/:id" element={<BlogPostPage slideData={slideData} />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import TrandingSlider from "./Pages/HomePage/component/TrandingSlider/TrandingSlider";
import BlogPostPage from "./Pages/HomePage/component/BlogPostpage/BlogPostPage";
import PersonalisedTrips from "./Pages/PersonalisedTrips/PersonalisedTrips";
import CorporatePage from "./Pages/CorporatePage/CorporatePage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personalised-trips" element={<PersonalisedTrips />} />
        <Route path="/corporate-trips" element={<CorporatePage />} />
        <Route path="/group-trips" element={<div />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<TrandingSlider />} />
        <Route
          path="/blog/:id"
          element={<BlogPostPage slideData={slideData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";
import ReactGA from 'react-ga';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

ReactGA.initialize('G-C4D0JCJBKS');

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
  );
}

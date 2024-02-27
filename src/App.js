import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RenderCard from "./components/Card/RenderCard";
import RelatedProduct from "./components/Card/Relatedproduct";
import Signup from "./components/Signup/Signup";
import Feature from "./components/Features/Feature";
import HorizontalLine from "./components/Layout/HorizontalLine";
import PageTitle from "./components/PageTitle/PageTitle.js";
import Breadcrumb from "./components/Layout/Breadcrumb.js";
import { CiCircleCheck } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import "./App.scss";

function App() {
  return (
    <>
      <Header menu={["Categories", "Website Builders", "Today's Deal"]} />
      <div className="container">
        <PageTitle title={"Best Website builders in the US"} />
        <HorizontalLine />
        <div className="update-info">
          <div>
            <CiCircleCheck className="check-icon" />
            <p>
              Last Updated <span>&ndash;</span> February 22, 2020
            </p>
            <GoInfo className="info-icon" />
            <p>Advertising Disclosure</p>
          </div>
          <p>Top Relevent &#9660;</p>
        </div>
        <HorizontalLine />
        <Feature />
        <Breadcrumb path={["Home", "Hosting for all", "Hosting", "Hosting5"]} />
        <RenderCard />
        <RelatedProduct />
        <Signup />
      </div>
      <Footer />
    </>
  );
}

export default App;

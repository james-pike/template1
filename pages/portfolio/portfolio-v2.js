import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioTopTitle from "../../components/portfolio/PortfolioTopTitle";
import PortfolioGallery2 from "../../components/portfolio/PortfolioGallery2";
import Link from "next/link";
import CallToAction from "../../components/portfolio/CallToAction";

const PortfolioV2 = () => {
  return (
    <>
      <Seo pageTitle="Portfolio V2" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
          <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Past Work</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Agency work with top rated talented people provide qulaity
              services.
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* <PortfolioTopTitle /> */}

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery2 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV2;

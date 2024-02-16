import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-10/Header";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Blog3 from "../../components/blog/Blog3";
import Pagination from "../../components/blog/Pagination";

const GridLayout = () => {
  return (
    <>
      <Seo pageTitle="Grid Layout" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Our Blog</h2>
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

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
    

      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-60">
            <div className="row gx-xxl-5">
              <Blog3 />
            </div>
            {/* End .row */}
            <div className="page-pagination-one d-flex justify-content-center text-center pt-15">
              <Pagination />
            </div>
            {/* End pagination */}
          </div>
          {/* End border-bottom */}
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default GridLayout;

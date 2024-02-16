import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "../../data/menu";

import { useRouter } from "next/router";
import Image from "next/image";

const MainMenu = () => {
  const router = useRouter();

  const isActive = (link) => {
    return router.pathname.replace("/[id]", "") === link.replace(/\/\d+$/, "");
  };

  
  const handleMainServicesClick = () => {
    router.push('/pages-menu/service-v4'); // Navigate to the main services page
  };

  const handleMainPortfolioClick = () => {
    router.push('/portfolio/portfolio-v2'); // Navigate to the main services page
  };



  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

        
          {/* End li (home mega menu) */}

          <li className="nav-item">
  <a
    href="/pages-menu/about-us-v3" // Change this to the actual URL of your about page
    className={
      isActive("/pages-menu/about-us-v3") // Assuming isActive is a function to check if the current page is the About page
        ? "nav-link active-menu"
        : "nav-link"
    }
  >
    About
  </a>
</li>


<li className="nav-item dropdown">
      <a
        className={
          contactItems.some((elm) => isActive(elm.link))
            ? "nav-link dropdown-toggle active-menu"
            : "nav-link dropdown-toggle"
        }
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        onClick={handleMainServicesClick} // Add onClick event handler
      >
        Services
      </a>
      <ul className="dropdown-menu">
        {contactItems.map((contact, index) => (
          <li key={index}>
            <Link
              href={contact.link}
              className={`dropdown-item ${
                isActive(contact.link) ? "active" : ""
              }`}
            >
              <span>{contact.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
      <a
        className={
          portfolioItems.some((elm) => isActive(elm.link))
            ? "nav-link dropdown-toggle active-menu"
            : "nav-link dropdown-toggle"
        }
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        onClick={handleMainPortfolioClick} // Add onClick event handler
      >
        Portfolio
      </a>
      <ul className="dropdown-menu">
        {portfolioItems.map((portfolio, index) => (
          <li key={index}>
            <Link
              href={portfolio.link}
              className={`dropdown-item ${
                isActive(portfolio.link) ? "active" : ""
              }`}
            >
              <span>{portfolio.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
          {/* End li (pages) */}

          <li className="nav-item">
  <a
    href="/blog/blog-v3" // Change this to the actual URL of your about page
    className={
      isActive("/about") // Assuming isActive is a function to check if the current page is the About page
        ? "nav-link active-menu"
        : "nav-link"
    }
  >
    Blog
  </a>
</li>
          {/* End li (blog) */}
          <li className="nav-item">
  <a
    href="/contact/contact-v2" // Change this to the actual URL of your contact page
    className={
      contactItems.some((elm) => isActive(elm.link))
        ? "nav-link active-menu"
        : "nav-link"
    }
  >
    Contact
  </a>
</li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;

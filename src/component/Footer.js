import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            {/* <li className="wow fadeIn" data-wow-delay=".8s">
              <a href="https://twitter.com/sanajitjana01" target="newtab">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li> */}
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a
                href="https://www.linkedin.com/in/farhan-ullah-10206633b/"
                target="newtab"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".2s">
              <a
                href="https://www.facebook.com/share/17Gcf9ZVDj/"
                target="newtab"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".4s">
              <a
                href="https://www.instagram.com/farhan_salih_?igsh=MXNudmxkOWsxZXpoNA=="
                target="newtab"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".8s">
              <a
                href="https://wa.me/923489877787"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="1.2s">
              <a href="https://github.com/farhanullah221" target="newtab">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Farhan Salih.</h3>
        </div>

        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
      </div>
    </React.StrictMode>
  );
}

export default Footer;

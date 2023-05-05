
import './App.css';
function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="me-4 link-secondary">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary"></i>Ali Express</h6>
            <p>
              Shop your Favourite products now with the ease of sitting at any corner in the world.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" className="text-reset">Clothings</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Shoes</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Bags</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Jewellary</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" className="text-reset">Contact Us</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Help Centre</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Become a Seller</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Rate a Product</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3 text-secondary"></i> Shinghai, China</p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              aliexpress@yopmail.com
            </p>
            <p><i className="fas fa-phone me-3 text-secondary"></i> + 232 463 23423</p>
            <p><i className="fas fa-print me-3 text-secondary"></i> + 232 463 23424</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
  );
}
export default Footer;


import './App.css';

function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo-2010.png" alt="Bootstrap" width="100"
              height="100"/>
          </a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              <button type="button" class="btn btn-light"><span class="bi bi-cart me-2"></span></button>
          </form>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">My Orders</a></li>
                  <li><a className="dropdown-item" href="#">My Coins</a></li>
                  <li><a className="dropdown-item" href="#">Message Centre</a></li>
                  <li><a className="dropdown-item" href="#">My Wishlist</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Vouchers</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Clothings</a></li>
                  <li><a className="dropdown-item" href="#">Perfumes & Cosmetics</a></li>
                  <li><a className="dropdown-item" href="#">Shoes & Sandles</a></li>
                  <li><a className="dropdown-item" href="#">Jewellary & Accessories</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Become a Seller</a></li>
                  <li><a className="dropdown-item" href="#">Track your Order</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="#">Complaints & Help centre</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Cool Home Gadgets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Super Deals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New User Zone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trending</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;

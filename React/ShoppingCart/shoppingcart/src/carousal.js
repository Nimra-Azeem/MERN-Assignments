
import './App.css';

function Carousal() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src="https://haleyslifeincolor.com/wp-content/uploads/2019/04/shoppingapp.jpg" className="d-block w-100"
          alt="Carousal1" height="320"/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="https://www.businessmagazine.org/wp-content/uploads/2021/12/Shopping.jpg" className="d-block w-100"
          alt="Carousal2" height="320"/>
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/free-photo/cheerful-young-woman-thinking-buying-something-holding-shopping-bags-with-dreamy-smile-buying-sta_1258-127372.jpg"
          className="d-block w-100" alt="Carousal3" height="320"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span classNameName="visually-hidden">Next</span>
    </button>
  </div>
  );
}
export default Carousal;

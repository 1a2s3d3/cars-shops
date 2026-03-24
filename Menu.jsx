import Image1 from "../assets/images-1.jpg";
import Image2 from "../assets/images-2.jpg";
import Image3 from "../assets/images-3.jpg";
import Image4 from "../assets/images-4.jpg";

function Menu() {
  return (
    <>
      <div className="header">
        <h1>Here are some cars for sale</h1>
      </div>

      <div className="containers d-flex justify-content-center mt-5">
        <div
          className="row row-cols-1 row-cols-md-2 g-4 w-100"
          style={{ maxWidth: "800px" }}
        >
          {/* Card 1 */}
          <div className="col">
            <div className="bg-white p-3 text-center shadow rounded">
              <img src={Image1} alt="Lexus" className="img-fluid mb-2" />
              <h5>Lexus</h5>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="bg-white p-3 text-center shadow rounded">
              <img src={Image2} alt="Car" className="img-fluid mb-2" />
              <h5>Corolla</h5>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="bg-white p-3 text-center shadow rounded">
              <img src={Image3} alt="Car" className="img-fluid mb-2" />
              <h5>Venza</h5>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col">
            <div className="bg-white p-3 text-center shadow rounded">
              <img src={Image4} alt="Car" className="img-fluid mb-2" />
              <h5>Ferrari</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
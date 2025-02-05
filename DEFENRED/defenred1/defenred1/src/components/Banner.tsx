import "./css/banner.css";

const Banner = () => {
  return (
    <div className="banner" id="slider">
      <h2>«Personas cuidando personas»</h2>
      <figure>
        <img
          className="imagenBanner"
          src="/medios/Fotografías e ilustraciones/banner6.jpg"
          alt=""
        />
        <img src="/medios/Fotografías e ilustraciones/banner4.jpg" alt="" />
        <img src="/medios/Fotografías e ilustraciones/banner2.jpg" alt="" />
        <img src="/medios/Fotografías e ilustraciones/banner3.jpg" alt="" />
        <img
          className="imagenBanner"
          src="/medios/Fotografías e ilustraciones/banner6.jpg"
          alt=""
        />
      </figure>
    </div>
  );
};
export default Banner;

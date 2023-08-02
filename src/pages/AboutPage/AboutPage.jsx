import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <h2 className="aboutTittle">About Aurora Drinks</h2>
      <div className="aboutImgText">
        <img
          className="aboutImg"
          src={require("../../Img/imgAbout.webp")}
          alt="Preparing cocktails"
        />
        <p className="aboutText">
          We are lovers of creative beverages. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Cras at neque nec arcu efficitur ornare.
          Suspendisse nisi est, luctus quis sodales vitae, bibendum sed erat.
          <br />
          <br />
          Integer congue, urna ut accumsan efficitur, mauris odio interdum ex,
          in fringilla tortor libero in magna. Integer rutrum erat eu felis
          tempor suscipit. Phasellus efficitur mi dui, ornare posuere magna
          feugiat id. Proin vehicula, eros vel tristique eleifend, turpis ligula
          convallis diam, vel elementum diam nisi vel neque. Ut nec laoreet
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          <br /> Cras at neque nec arcu efficitur ornare. Suspendisse nisi est,
          luctus quis sodales vitae, bibendum sed erat. Integer congue, urna ut
          accumsan efficitur, mauris odio interdum ex, in fringilla tortor
          libero in magna. Integer rutrum erat eu felis tempor suscipit.
          Phasellus efficitur mi dui, ornare posuere magna feugiat id. Proin
          vehicula, eros vel tristique eleifend, turpis ligula convallis diam,
          vel elementum diam nisi vel neque. Ut nec laoreet tellus.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

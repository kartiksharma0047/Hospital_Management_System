const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>ZeroBills was founded with a vision to bridge the gap between patients and healthcare providers, making medical consultations accessible, efficient, and personalized. The platform emerged from the idea that scheduling appointments should be straightforward and transparent, empowering both patients and doctors.</p>
          <p>
          With a robust system allowing doctors to manage appointments by accepting, rejecting, or marking requests as pending, ZeroBills stands out as a modern healthcare solution. The name reflects our commitment to reducing unnecessary complexities, focusing instead on seamless communication and healthcare accessibility.
          </p>
          <p>Our mission is to ensure everyone can connect with quality healthcare professionals, fostering trust and convenience in every interaction.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

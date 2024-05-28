import pose2 from "../assets/flying.png";
import rectangle from "../assets/Rectangle 4058.png";
import arrow from "../assets/Group 9268.png";
import know from "../assets/Group 9222.png";
const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="heading">
        <h2>We're Not new,</h2>
      </div>
      <div className="achievement-content">
        <div className="achievement-img">
          <img src={pose2} alt="" />
          <div className="know-more">
            <img style={{ width: "auto" }} src={know} alt="" />{" "}
            <span>Know more </span>
          </div>
        </div>
        <div className="achievement-text">
          <h2 className="achiev-txt2">Already above</h2>
          < h2 className="achiev-txt3">
            <span>the</span> <span className="highlight">Surface</span>
          </h2>
          <div className="image-container">
            <div className="image-with-text">
              <div className="image-overlay">
                <img src={rectangle} alt="" />
                <div className="text-container">
                  <h2 className="inner_txt">24K</h2>
                  <p>Projects Lanched</p>
                </div>
              </div>
            </div>
            <div className="image-with-text2">
              <div className="image-overlay">
                <img src={rectangle} alt="" />
                <div className="text-container">
                  <h2 className="inner_txt">2.3M</h2>
                  <p>Member in Community</p>
                </div>
              </div>
            </div>
            <img className="third_img" style={{}} src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;

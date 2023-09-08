import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {

    const handleReadClick = () => {
        const windowWidth = window.innerWidth;
        let scrollDistance = 1100;

        if (windowWidth <= 1300) {
            scrollDistance = 1040;
        }
      
        if (windowWidth <= 1200) {
            scrollDistance = 940;
        }

        window.scrollTo({
            top:scrollDistance,
            behavior: "smooth",
        })
    };
    
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adispiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curac tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={handleReadClick}>Shop More</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;

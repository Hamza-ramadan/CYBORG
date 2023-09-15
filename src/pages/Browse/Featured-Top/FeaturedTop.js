import "./FeaturedTop.css"
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper"
import SectionHeader from "../../../components/section-Header/SectionHeader"
import Featuredimg1 from "../../../images/featured-01.jpg"
import Featuredimg2 from "../../../images/featured-02.jpg"
import Featuredimg3 from "../../../images/featured-03.jpg"
import topimg1 from "../../../images/game-01.jpg"
import topimg2 from "../../../images/game-02.jpg"
import topimg3 from "../../../images/game-03.jpg"

const FeaturedTop = () => {
  return (
    < div className="d-flex flex-wrap">
    <div className="Featured col-md-7 col-12 me-md-5 ">
    <SectionWrapper>
        <SectionHeader pepepep="Featured " sspp="Games"/>
            <div className="Featured-boxs">
            <div className="Featured-box">
                <div className="Featured-box-main">
                <img src={Featuredimg1} alt=""/>
                <div  className="Featured-box-title">2.5k streaming</div>
                </div>
                <div  className="Featured-box-title2 d-flex justify-content-between">
                    <h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul>
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                </div>

            </div>
            <div className="Featured-box">
                <div className="Featured-box-main">
                <img src={Featuredimg2} alt=""/>
                <div  className="Featured-box-title">2.5k Streaming</div>
                </div>
                <div  className="Featured-box-title2 d-flex justify-content-between">
                    <h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul>
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                </div>

            </div>
            <div className="Featured-box">
                <div className="Featured-box-main">
                <img src={Featuredimg3} alt=""/>
                <div  className="Featured-box-title">2.5k Streaming</div>
                </div>
                <div  className="Featured-box-title2 d-flex justify-content-between">
                    <h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul>
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                </div>

            </div>
            </div>
    </SectionWrapper>
    </div>
    <div className="jjj col-12 col-md-4">
        <SectionWrapper >
            <SectionHeader pepepep="Top" sspp="Downloaded"/>
            <div className="topboxs">
                <div className="topbox d-flex justify-content-between align-items-center flex-wrap">
                    <div><img src={topimg1} alt=""/></div>
                    <div><h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul className=" ulgg d-flex  ">
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                    </div>

                    <div className="aaaaw"><i  className="fa fa-download "/></div>
                </div>
                <div className="topbox d-flex justify-content-between align-items-center flex-wrap">
                    <div><img src={topimg2} alt=""/></div>
                    <div><h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul className=" ulgg d-flex  ">
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                    </div>

                    <div className="aaaaw"><i  className="fa fa-download "/></div>
                </div>
                <div className="topbox d-flex justify-content-between align-items-center flex-wrap">
                    <div><img src={topimg3} alt=""/></div>
                    <div><h4>GaRenEZ<br/><span>2k dawnload's</span></h4>
                    <ul className="ulgg d-flex ">
                        <li> <i className="fa-solid fa-star star11"> </i> 4.8</li>
                        <li><i  className="fa fa-download dawn11"> </i> 2.3M</li>
                    </ul>
                    </div>

                    <div className="aaaaw"><i  className="fa fa-download "/></div>
                </div>
                <a href="/#">View All Games</a>
            </div>
        </SectionWrapper>
        </div>
    </div>
    
  )
}

export default FeaturedTop
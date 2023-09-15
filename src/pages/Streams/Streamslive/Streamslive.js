import "./Streamslive.css"
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper"
import SectionHeader from "../../../components/section-Header/SectionHeader"
import Featuredimg1 from "../../../images/featured-01.jpg"
import Featuredimg2 from "../../../images/featured-02.jpg"
import Featuredimg3 from "../../../images/featured-03.jpg"
import topstreamimg1 from "../../../images/avatar-01.jpg"
import topstreamimg4 from "../../../images/avatar-02.jpg"
import topstreamimg3 from "../../../images/avatar-03.jpg"
import topstreamimg2 from "../../../images/avatar-04.jpg"
const Streamslive = () => {
  return (
    < div className="d-flex flex-wrap">
    <div className="Featured col-md-7 col-12 me-md-5 ">
    <SectionWrapper>
        <SectionHeader pepepep="Live " sspp="Streams"/>
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
            <SectionHeader pepepep="Top" sspp="Streams"/>
            <div className="topstraem">
                <ul>
                    <li><span>01</span><img src={topstreamimg1} alt=""/></li>
                    <li><i className="fa-solid fa-check"></i>LahutaM</li>
                    <li><a href="/">Follow</a></li>
                </ul>
                <ul>
                    <li><span>02</span><img src={topstreamimg2} alt=""/></li>
                    <li><i className="fa-solid fa-check"></i>Kengan </li>
                    <li><a href="/">Follow</a></li>
                </ul>
                <ul>
                    <li><span>03</span><img src={topstreamimg3} alt=""/></li>
                    <li><i className="fa-solid fa-check"></i>Areluwa </li>
                    <li><a href="/">Follow</a></li>
                </ul>
                <ul>
                    <li><span>04</span><img src={topstreamimg4} alt=""/></li>
                    <li><i className="fa-solid fa-check"></i>Omeg</li>
                    <li><a href="/">Follow</a></li>
                </ul>
                <ul>
                    <li><span>05</span><img src={topstreamimg3} alt=""/></li>
                    <li><i className="fa-solid fa-check"></i>GangTeam</li>
                    <li><a href="/">Follow</a></li>
                </ul>
            </div>
        </SectionWrapper>
        </div>
    </div>
  )
}

export default Streamslive
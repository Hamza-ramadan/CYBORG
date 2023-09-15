import"./Mostpopularlive.css"
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper"
import SectionHeader from "../../../components/section-Header/SectionHeader"
import imga1 from "../../../images/stream-01.jpg"
import imga2 from "../../../images/stream-02.jpg"
import imga3 from "../../../images/stream-03.jpg"
import imga4 from "../../../images/stream-04.jpg"
import avatar1 from "../../../images/avatar-01.jpg"
import avatar2 from "../../../images/avatar-02.jpg"
import avatar3 from "../../../images/avatar-03.jpg"
import avatar4 from "../../../images/avatar-04.jpg"
const Mostpopularlive = () => {
return (
    <SectionWrapper>
        <SectionHeader  pepepep="Most Popular" sspp="Live Stream"/>
        <div className="Mostpopularliveboxs">
            <div className="Mostpopularlivebox">
                <div className="Mostpopularlive-img-main">
                    <img src={imga1} alt=""/>
                    <span className="sapnoooo"><h5>Live</h5></span>
                    <div className="Mostpopularlive-title-img">
                        <span><i className="fa-regular fa-eye"></i>1.2K</span>
                        <span><i className="fa-solid fa-gamepad"></i>Cs_Go</span>
                    </div>
                </div>
                <div className="Mostpopularliveman">
                    <img src={avatar1} alt="/"/>
                    <div className="Mostpopularlivemanname">
                        <span><i className="fa-solid fa-check"></i> KenganC </span>
                        <h3>Just Talking With Fans</h3>
                    </div>
                </div>
            </div>
            <div className="Mostpopularlivebox">
                <div className="Mostpopularlive-img-main">
                    <img src={imga4} alt=""/>
                    <span className="sapnoooo"><h5>Live</h5></span>
                    <div className="Mostpopularlive-title-img">
                        <span><i className="fa-regular fa-eye"></i>1.2K</span>
                        <span><i className="fa-solid fa-gamepad"></i>Cs_Go</span>
                    </div>
                </div>
                <div className="Mostpopularliveman">
                    <img src={avatar2} alt="/"/>
                    <div className="Mostpopularlivemanname">
                        <span><i className="fa-solid fa-check"></i> GangTm </span>
                        <h3>Live Streaming Till Mornin</h3>
                    </div>
                </div>
            </div>
            <div className="Mostpopularlivebox">
                <div className="Mostpopularlive-img-main">
                    <img src={imga3} alt=""/>
                    <span className="sapnoooo"><h5>Live</h5></span>
                    <div className="Mostpopularlive-title-img">
                        <span><i className="fa-regular fa-eye"></i>1.2K</span>
                        <span><i className="fa-solid fa-gamepad"></i>Cs_Go</span>
                    </div>
                </div>
                <div className="Mostpopularliveman">
                    <img src={avatar3} alt="/"/>
                    <div className="Mostpopularlivemanname">
                        <span><i className="fa-solid fa-check"></i> Areluwa </span>
                        <h3>CS-GO 36 Hours Live Stream</h3>
                    </div>
                </div>
            </div>
            <div className="Mostpopularlivebox">
                <div className="Mostpopularlive-img-main">
                    <img src={imga2} alt=""/>
                    <span className="sapnoooo"><h5>Live</h5></span>
                    <div className="Mostpopularlive-title-img">
                        <span><i className="fa-regular fa-eye"></i>1.2K</span>
                        <span><i className="fa-solid fa-gamepad"></i>Cs_Go</span>
                    </div>
                </div>
                <div className="Mostpopularliveman">
                    <img src={avatar4} alt="/"/>
                    <div className="Mostpopularlivemanname">
                        <span><i className="fa-solid fa-check"></i>  LunaMa </span>
                        <h3>Maybe Nathej Allnight Chillin'</h3>
                    </div>
                </div>
            </div>
        </div>
        <a href="/Streams" className="btn501">discover all Streams</a>
    </SectionWrapper>
)
}

export default Mostpopularlive
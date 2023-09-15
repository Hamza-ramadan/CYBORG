import "./startlive.css"
import SectionWrapper from "../../../components/SectionWrapper/SectionWrapper"
import SectionHeader from "../../../components/section-Header/SectionHeader"

const Startlive = () => {
  return (
    <SectionWrapper>
        <div className="suii">
        <SectionHeader  pepepep="How To Start Your" sspp="Live Stream"/>
            <div className="Startliveboxs">
                <div className="Startlivebox">
                    <span><i className="fa-solid fa-person-through-window"></i></span>
                    <h3>Go To Your Profile</h3>   
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                </div>
                <div className="Startlivebox">
                    <span><i className="fa-solid fa-puzzle-piece"></i></span>
                    <h3>Live Stream Button</h3>   
                    <p>If you wish to support us, you can make a <a href="/#">small contribution via PayPal</a>  to info [at] templatemo.com.</p>
                </div>
                <div className="Startlivebox">
                    <span><i className="fa-regular fa-circle-play"></i></span>
                    <h3>You Are Live</h3>   
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</p>
                </div>
            </div>
        </div>
        <a href="/profile" className="btn501">go to profile</a>
    </SectionWrapper>
  )
}

export default Startlive
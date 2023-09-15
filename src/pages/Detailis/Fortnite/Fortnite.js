import "./Fortnite.css"
import SectionWraper from "../../../components/SectionWrapper/SectionWrapper"
import fortniteimg1 from "../../../images/details-01.jpg"
import fortniteimg2 from "../../../images/details-02.jpg"
import fortniteimg3 from "../../../images/details-03.jpg"
const Fortnite = () => {
  return (
    <>
        <SectionWraper>
            <div className="fortnitesection" >
                <div className="fortnitesection1 ">
                    <h1>Fortnite <span><br/> Sandbox</span> </h1>
                    <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                </div>
                <div className="fortnitesection2">
                    <p><i className="fa-solid fa-star seasea"></i><br/>4.9</p>
                    <p><i className="fa-solid fa-download"></i><br/>7M</p>
                    <p><i className="fa-solid fa-trophy"></i><br/>3K</p>
                    <p><i className="fa-solid fa-tags"></i><br/>20</p>
                </div>
            </div>
            <div className="fortniteimg">
                <img src={fortniteimg1} alt=""/>
                <img src={fortniteimg3} alt=""/>
                <img src={fortniteimg2} alt=""/>
            </div>
            <p className="asasas">
            Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span> small contribution via PayPal to info [at] templatemo.com and thank you for supporting.</span>  If you want to get the PSD
            source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
            </p>
            <button className="sda" type="submit">Download Game Fortnite</button>
        </SectionWraper>
    </>
  )
}

export default Fortnite
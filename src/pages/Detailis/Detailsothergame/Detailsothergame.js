import "./Detailsothergame.css"
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import SectionHeader from "../../../components/section-Header/SectionHeader"
import otherimg1 from "../../../images/game-01.jpg"
import otherimg2 from "../../../images/game-02.jpg"
import otherimg3 from "../../../images/game-03.jpg"
const Detailsothergame = () => {
    return (
        <>
            <SectionWrapper>
                <SectionHeader   pepepep="Other Related " sspp="Games" />
                <div className="ulslis">
                    <ul>
                        <li>
                            <div>
                                <img src={otherimg1} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                        <li>
                            <div>
                                <img src={otherimg3} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <img src={otherimg2} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                        <li>
                            <div>
                                <img src={otherimg1} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div>
                                <img src={otherimg3} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                        <li>
                            <div>
                                <img src={otherimg2} alt=""/>
                                <h5>Dota2<br/> <span> Sandbox</span></h5>
                            </div>
                            <p><span><i className="fa-solid fa-star sasasa"></i>2.8</span> <br/><span><i className="fa-solid fa-download sesese"></i>2.9M</span> </p>
                        </li>
                    </ul>
                </div>
            </SectionWrapper>
        </>
    )
}

export default Detailsothergame
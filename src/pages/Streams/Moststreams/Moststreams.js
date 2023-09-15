import "./Moststreams.css"
import SectionHeader from '../../../components/section-Header/SectionHeader'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import streamimg1 from '../../../images/stream-05.jpg'
import streamimg4 from '../../../images/stream-06.jpg'
import streamimg3 from '../../../images/stream-07.jpg'
import streamimg2 from '../../../images/stream-08.jpg'
import streamimgss1 from '../../../images/avatar-01.jpg'
import streamimgss4 from '../../../images/avatar-04.jpg'
import streamimgss3 from '../../../images/avatar-03.jpg'
import streamimgss2 from '../../../images/avatar-02.jpg'
const Moststreams = () => {
  return (
    <>
        <SectionWrapper>
            <SectionHeader pepepep="Most Popular" sspp="Live Stream"/>
            <div className='moststreamsboxs'>
                <div className='moststreamsbox'>
                    <img src={streamimg4} className='imgaaa' alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss4} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>Kengan Omeg</p>
                            <h4>Just Talking With Fans</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg3} className='imgaaa'alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss3} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>Areluwa</p>
                            <h4>CS-GO 36 Hours Live Stream</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg2} className='imgaaa'  alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss3} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>NewGangTeam</p>
                            <h4>Maybe Nathej Allnight Chillin'</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg1} className='imgaaa'  alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss1} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>LahutaMalc</p>
                            <h4>Live Streaming Till Morning</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg1}className='imgaaa'  alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss1} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>Areluwa</p>
                            <h4>Maybe Nathej Allnight Chillin'</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg3} className='imgaaa'  alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss2} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>Areluwa</p>
                            <h4>Live Streaming Till Morning</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img src={streamimg4} className='imgaaa'  alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss4} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>LahutaMalc</p>
                            <h4>Just Talking With Fans</h4>
                        </div>
                    </div>
                </div>
                <div className='moststreamsbox'>
                    <img className='imgaaa' src={streamimg2} alt=""/>
                    <div className='moststreamtitles'>
                        <img src={streamimgss3} alt=""/>
                        <div>
                            <p><i className="fa-solid fa-check"></i>NewGangTeam</p>
                            <h4>CS-GO 36 Hours Live Stream</h4>
                        </div>
                    </div>
                </div>
                <a href="/" className='sasawsw'>Load More Streams</a>
                
            </div>
        </SectionWrapper>
    </>
  )
}

export default Moststreams
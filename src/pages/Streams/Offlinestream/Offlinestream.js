import './Offlinestream.css'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import Profileimg from "../../../images/profile.jpg"
const Offlinestream = () => {
  return (
    <SectionWrapper>
    <div className='offlinestream'>

        <div>
            <img src={Profileimg} alt=""/>
        </div>
        <div>
            <span className='shshshs'>Offline</span>
            <h3>Alan Smithee</h3>
            <p className='shscc'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            <a href="/">Start Live Stream</a>
        </div>
        <div  className='shsccs'>
            <ul>
                <li>
                    <p>Games Downloaded</p>
                    <span>3</span>
                </li>
                <li>
                    <p>Friends Online</p>
                    <span>10</span>
                </li>
                <li>
                    <p>Live Streams </p>
                    <span>None</span>
                </li>
                <li>
                    <p>Clips</p>
                    <span>26</span>
                </li>
                
            </ul>
        </div>
    </div>

        </SectionWrapper>
  )
}

export default Offlinestream
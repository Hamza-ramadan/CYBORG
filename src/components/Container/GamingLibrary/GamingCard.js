import "./GamingCard.css"

export const GamingCard = (props) => {
    return (
        <div className="gaming-librey-card">
            <ul>
                <li><img src={props.photo} alt=""/></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4>Data Added</h4><span>{props.data_added}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours_playeded}</span></li>
                <li><h4>Currently</h4><span>{props.download}</span></li>
                <li><div className="bb1">
                <a href="/#">Dawnload</a>
            </div></li>
            </ul>
            
        </div>
    )
}
export default GamingCard
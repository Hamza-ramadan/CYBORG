import "./SectionHeader.css"

const SectionHeader = (props) => {
  return (
      <div className="section-header">
          <h4>{props.pepepep}</h4>
          <span>{props.sspp}</span>
      </div>
  //     <div className="section-header">
  //     <h4>Most Popular <span> Right Now:</span></h4>
  // </div>
  )
}

export default SectionHeader
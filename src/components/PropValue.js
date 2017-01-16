import React, { PropTypes } from "react"


const PropValue = ({onClick, subject_uri, property, object, provenance, selected, property_uri, object_uri, onButtonClick, hasExpandButton, button_type,hasLink, hasLink_button,extraLinkClick}) => { 
	return(
		<div className={"row text-left"} onClick={onClick} title ={selected} style={{ overflow:'hidden', color:  selected ?"white":"black", backgroundColor: selected ? "#269075" : "white" ,minHeight: 33}}>
			<div id="subject_uri" title={subject_uri} style={{display : "none"}}></div>
			<div className="col-md-2" id="property_uri" title={property_uri} > {property} </div>
			<div className="col-md-7"  title={object_uri} > {object} {hasLink ? <button type="button" className="btn btn-link btn-sm"><i onClick={extraLinkClick} className ={hasLink_button}></i></button> : null}</div>
			<div className="col-md-2"> {provenance} </div>
			<div className="col-md-1">
				{hasExpandButton ? <button type="button" className="btn btn-link btn-sm"><i onClick={onButtonClick} className={button_type}></i></button> : null}
			</div>
		</div>
)}

PropValue.propTypes = {
    onCLick: PropTypes.func,
	object: PropTypes.string.isRequired,
	property: PropTypes.string.isRequired,
	provenance: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired
}

export default PropValue

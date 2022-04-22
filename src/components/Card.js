import React from "react";
import locationIcon from "../images/location-icon.png"
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-item">
        <a href={props.item.imageUrl} target="_blank" rel="noreferrer"><img src={props.item.img}  alt="Location" className="card-photo" /></a>
        <div className="card-body">
          <p className="card-location"><img src={locationIcon} alt="" className="location-icon" /><span className="location">{props.item.location}</span><span><a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer" className="location-link">View on Google Maps</a></span></p>
          <h1 className="card-title">{props.item.title}</h1>
          <p className="card-date"><span className="start-date">{props.item.startDate}</span>-<span className="end-date">{props.item.endDate}</span></p>
          <p className="card-description">{props.item.description}</p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  )
}


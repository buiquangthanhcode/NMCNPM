import React from 'react'
import './popup.css'
// icon close popup
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="closebtn" onClick={()=>props.setTrigger(false)}>
                <FontAwesomeIcon icon={faX} className="closeIcon" />
            </button>
            <h1>{props.children}</h1>
        </div>
    </div>
  ) : "";
}

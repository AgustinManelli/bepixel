import * as React from "react"
import "../stylesheets/HeaderPic.css"
import log_1 from "../image/HEADERPIC/log_1.webp"
import log_2 from "../image/HEADERPIC/log_2.webp"
import log_3 from "../image/HEADERPIC/log_3.webp"
import log_4 from "../image/HEADERPIC/log_4.webp"
import log_5 from "../image/HEADERPIC/log_5.webp"

function HeaderPic(){
  return (
    <div className="HeaderPicContainer">
        <img src={log_2} className="secondarycomponentheaderpic cloud1"></img>
        <img src={log_1} className="firstcomponentheaderpic"></img>
        <img src={log_3} className="secondarycomponentheaderpic rocket1"></img>
        <img src={log_4} className="secondarycomponentheaderpic human1"></img>
        <img src={log_5} className="secondarycomponentheaderpic cloud2"></img>
    </div>
  )
  }

export default HeaderPic

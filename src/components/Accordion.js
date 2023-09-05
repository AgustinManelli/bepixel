import React, { useEffect, useRef, useState } from "react";
import '../stylesheets/Accordion.css'


function Accordion (props) {

  const [activeAccordion, setactiveAccordion] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setactiveAccordion(!activeAccordion);
    setHeight(activeAccordion ? "0px" : `${content.current.scrollHeight}px`);
  }

  return(
    <div className="accordion__section">
      <div
        className={`accordion ${activeAccordion ? "activeAccordion" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <span className={activeAccordion ? 'spanAccordion spanAccordionopen' : 'spanAccordion'}></span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion ;
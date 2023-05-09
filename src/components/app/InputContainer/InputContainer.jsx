import React, { useState } from "react";
import { Collapse } from "@material-ui/core";

import InputCard from "../InputCard/InputCard";

import "./inputcontainer.styles.css";

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="input-container">
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <div className="input-content">
          <button className='button-content' onClick={() => setOpen(!open)}>
            {type === "card" ? "+ Añada tarjeta" : "+ Añada lista"}
          </button>
        </div>
      </Collapse>
    </div>
  );
}

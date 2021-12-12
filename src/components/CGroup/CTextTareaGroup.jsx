import React from "react";

function CTextTareaGroup(props) {
    const { label,value } = props;
    return (
        <div className="form-group">
              <label>{label}</label>
            <textarea className="form-control" value={value} required></textarea>
        </div>
    )
}

export default CTextTareaGroup;
import React from "react";

function CButton(props) {
    const{ className,icon, name } = props;

    return(
        <a href="#" className={className} data-toggle="modal">{icon && <i className="material-icons">{ icon}</i>} {name && <span>{name}</span>}</a>
    )
}

export default CButton;
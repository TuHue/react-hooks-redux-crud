import React from 'react';

function CInputGroup(props) {

    const { label,type,value } = props;

    return (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} className="form-control" value={value} required/>
        </div>
    )
}

export default CInputGroup;
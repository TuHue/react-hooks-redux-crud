import React from "react";
import CButton from '../../components/CButton/CButton';

function CHeader() {

    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                    <CButton className="btn btn-success" icon='&#xE147;' name="Add New Employee" />
                    <CButton className="btn btn-danger" icon='&#xE15C;' name="Delete" />
                </div>
            </div>
        </div>
    )
}

export default CHeader;
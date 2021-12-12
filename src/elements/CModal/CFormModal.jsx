import React from 'react';
import { CInputGroup, CTextTareaGroup } from '../../components/CGroup';
import CButton from '../../components/CButton/CButton';

function CFormModal(props) {

    const { title } = props;

    return (

        <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h4 className="modal-title">{title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <CInputGroup label="Name" type="text" value="" />
                            <CInputGroup label="Email" type="email" value="" />
                            <CTextTareaGroup label="Email" value="" />
                            <CInputGroup label="Phone" type="text" value="" />
                        </div>
                        <div className="modal-footer">
                            <CButton className="btn btn-default" name="Cancel" />
                            <CButton className="btn btn-success" name="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CFormModal;
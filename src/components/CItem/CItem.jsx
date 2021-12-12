import React from "react";
import CButton from '../CButton/CButton';

function CItem() {

    return (
        <tr>
            <td>
                <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label for="checkbox1"></label>
                </span>
            </td>
            <td>Thomas Hardy</td>
            <td>thomashardy@mail.com</td>
            <td>89 Chiaroscuro Rd, Portland, USA</td>
            <td>(171) 555-2222</td>
            <td>
                <CButton className='edit' icon='&#xE254;' />
                <CButton className='delete' icon='&#xE872;' />
            </td>
        </tr>
    )
}

export default CItem;
import React from "react";
import CPaginations from'../../components/CPaginations/CPaginations';
function CFooter(){

    return(
        <div class="clearfix">
        <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
       <CPaginations/>
    </div>
    )
}

export default CFooter;
import React from "react";
import CItemPagination from "./CItemPagination";

function CPaginations() {

    return (
        <ul class="pagination">
            <li class="page-item disabled"><a href="#">Previous</a></li>
            <CItemPagination />
            <li class="page-item"><a href="#" class="page-link">Next</a></li>
        </ul>
    )
}

export default CPaginations;
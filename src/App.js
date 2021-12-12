import React, { useState } from "react";
import "./App.css";
import {
  CHeader,
  CTables,
  CFooter,
  CFormModal,
  CNotificationModal,
} from "./elements";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <CHeader />
            <CTables />
            <CFooter />
          </div>
        </div>
      </div>
      {showForm && <CFormModal />}
      {showNotification && <CNotificationModal />}
    </>
  );
}

export default App;

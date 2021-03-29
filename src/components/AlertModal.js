import React from "react";

function AlertModal({alertShow, alertMsg}) {
    return(
      <>
        <div className={alertShow?"modalDiv modalActive" :"modalDiv"}>
          <span className="modalText">{alertMsg}</span>
        </div>
      </>
    );
  }

export default AlertModal;
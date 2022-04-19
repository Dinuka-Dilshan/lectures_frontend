import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiSriLanka } from "react-icons/gi";

import styles from './NotificationBar.module.css';

const NotificationBar = () => {
  const [isNotificationVisible, setIsNotoficationVisible] = useState(true);

  const closehandler = () => {
    setIsNotoficationVisible(false);
  };

  return (
    isNotificationVisible && (
      <div
        className={`d-flex justify-content-evenly align-items-center ${styles.wrapper}`}
        style={{ width: "100%",  backgroundColor: "#16181D" }}
      >
        <div className="d-flex  align-items-center" >
          <span className="text-white fs-5">#GoHomeGota2022</span>
          <GiSriLanka size={20} style={{ color: "white" }}/>
        </div>
        <div>
          <AiOutlineClose
            style={{ color: "white" }}
            size={20}
            onClick={closehandler}
          />
        </div>
      </div>
    )
  );
};

export default NotificationBar;

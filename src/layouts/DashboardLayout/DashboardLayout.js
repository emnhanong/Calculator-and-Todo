import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="row">
        {toggle ? (
          <div className="col-md-2 toggleShow">
            <Sidebar handleToggle={handleToggle} toggle={toggle} />
          </div>
        ) : (
          <div className="col-md-2 toggleHide">
            <Sidebar handleToggle={handleToggle} toggle={toggle} />
          </div>
        )}
        <div className="col-md-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

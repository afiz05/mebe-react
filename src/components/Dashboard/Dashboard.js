import React from "react";
import { ArrowDownRightCircleFill } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <>
      <div className="container body-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body d-flex flex-column text-dark text-center">
                <ArrowDownRightCircleFill color="light" size={96} />
                This is some text within a card body.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body d-flex flex-column text-dark text-center">
                <ArrowRight color="blue" size={96} />
                This is some text within a card body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";

const NotFound = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
        }}
      >
        <footer id="sticky-footer" className=" bg-primary">
          <div className="text-center text-white py-1 footer">
            <small>Copyright &copy; PDPSIPA</small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFound;

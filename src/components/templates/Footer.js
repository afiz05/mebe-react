import React from "react";

var Footer = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          top: "10",
        }}
      >
        <footer id="sticky-footer" className=" bg-success">
          <div className="text-center text-white py-1 footer">
            <small>Copyright &copy; PDPSIPA</small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

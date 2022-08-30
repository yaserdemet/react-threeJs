import React from "react";
import { TbError404Off } from "react-icons/tb";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useEffect from "react"

const Error = () => {
  const navigate = useNavigate();


  return (
    <div className="error">
      <p>
        {" "}
        Opps Run Into Error ...
        <span>
          {" "}
          <TbError404Off />
        </span>
      </p>
      {/* <div>
        <Button variant="contained" onClick={() => navigate(-2)}>
          Go Back
        </Button>
      </div> */}
    </div>
  );
};

export default Error;

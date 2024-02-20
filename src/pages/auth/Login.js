import React from "react";
import Form from "../../components/Shared/Form/Form";

function Login() {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img
            src="./assets/images/image-1.jpg"
            alt="background for home page"
          />
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={'Login Page'} submitBtn={'Login'}/>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import style from "./CorporateForm.module.css";

const CorporateForm = () => {
  const [err, setErr] = useState({ message: "" });

  const handleNumOfpeople = (e) => {
    if (e.target.value < 1) {
      setErr({ message: "Number of people should be greater than 0" });
    } else if (e.target.value > 10) {
      setErr({ message: "Number of people should be less than 10" });
    } else {
      setErr({ message: "" });
    }
  };

  return (
    <>
      <div className={style.calciContainer}>
        <div className={style.formContainer}>
          <h1>Call Us!</h1>
          <form>
            <div className={style.bind}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Last Name"
                />
                <label for="floatingInput">Last Name</label>
              </div>
            </div>
            <div className={style.bind}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Mobile Number"
                />
                <label for="floatingInput">Mobile Number</label>
              </div>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Add any essential information here"
                id="floatingTextarea2"
                style={{ height: "100px", resize: "none" }}
              ></textarea>
              <label for="floatingTextarea2">
                Any other details you'd like to include?
              </label>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${style.button1}`}
            >
              Submit
            </button>
          </form>
          <p>*Our Agent will get in touch with you within some time. </p>
        </div>
      </div>
    </>
  );
};

export default CorporateForm;

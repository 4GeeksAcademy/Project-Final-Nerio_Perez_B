import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook htmlFor accessing the global state.
import { useState } from "react";
import "react-profile/themes/default";
import { openEditor } from "react-profile";
import { ImagenProfile } from "../components/ImagenProfile";

export const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
  })
   
  const [dataURL, setDataURL] = useState();

  const insertPicture = async (e) => {
    const image = await openEditor({ src: e.target.files[0], square: true });
    const dataURL = image.editedImage?.getDataURL();
    setDataURL(dataURL);
  };

  return (
    <div className="container mt-5">
      <div className="form-signin m-auto" style={{ width: "40%" }}>
        <h4 className="text-center shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          Create an account
        </h4>
        <form
          className="needs-validation shadow p-3 mb-5 bg-body-tertiary rounded"
          noValidate /* onSubmit={postUserData} */
        >
         <ImagenProfile/>
          {/* IMPUT NAME */}
          <div className="row g-3">
            <div>
              <input
                type="file"
                accept="image/jpeg;image/png"
                onChange={insertPicture}
              />
              <img src={dataURL} alt="" />
            </div>
            <div className="form-floating col-sm-6">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="first_name"
                placeholder=""
                /* value={userData.first_name} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="firstName" className="form-label ms-1">
                First name
              </label>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="form-floating col-sm-6">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="last_name"
                placeholder=""
                /* value={userData.last_name} */
                required
              /*  onChange={handleOnChange} */
              />
              <label htmlFor="lastName" className="form-label ms-1">
                Last name
              </label>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="form-floating col-12">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder=""
                /* value={userData.email} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="email" className="form-label ms-1">
                Email
              </label>
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>
            <div className="form-floating col-6">
              <input
                type="phoneNumber"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder=""
                /* value={userData.email} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="phoneNumber" className="form-label ms-1">
                Phone Number
              </label>
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>
            <div className="form-floating col-6">
              <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                placeholder=""
                /* value={userData.email} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="birthDate" className="form-label ms-1">
                Birth Date
              </label>
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>
            <div className="form-floating col-12">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder=""
                /* value={userData.password} */
                required
              /*  onChange={handleOnChange} */
              />
              <label htmlFor="password" className="form-label ms-1">
                Password
              </label>
              <div className="invalid-feedback">
                Please enter a valid password address htmlFor shipping updates.
              </div>
            </div>
            <div className="form-floating col-12">
              <input
                type="password"
                className="form-control"
                id="password_check"
                name="password_check"
                placeholder=""
                /* value={userData.password} */
                required
              /*  onChange={handleOnChange} */
              />
              <label htmlFor="password_check" className="form-label ms-1">
                Re-enter Password
              </label>
              <div className="invalid-feedback">
                Please enter a valid password address htmlFor shipping updates.
              </div>
            </div>
            <div className="form-floating col-sm-9">
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder=""
                /* value={userData.address} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="address" className="form-label ms-1">
                Address
              </label>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="form-floating col-sm-3">
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder=""
                /* value={userData.zip} */
                required
              /* onChange={handleOnChange} */
              />
              <label htmlFor="zip" className="form-label ms-1">
                Zip
              </label>
              <div className="invalid-feedback">Zip code required.</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="country"
                name="country"
                /* value={userData.country} */
                required
              /* onChange={handleOnChange} */
              >
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                className="form-select"
                id="state"
                name="state"
                /* value={userData.state} */
                required
              /* onChange={handleOnChange} */
              >
                <option value="">Choose...</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Hawai</option>
                <option>Illinios</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              id="btn-r"
              className="btn btn-primary shadow-sm"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

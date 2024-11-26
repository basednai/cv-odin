import { useState } from "react";

function GeneralInfo() {
  const [edit, setEdit] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  function formSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    setEdit(!edit);
  }

  return (
    <>
      <h2 className="allHeadings">General Info</h2>
      <form className="sectionWrap" onSubmit={formSubmit}>
        <div className="formFields">
          <div className="field">
            <label htmlFor="fname">First Name: </label>
            {edit ? (
              <input
                type="text"
                id="fname"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            ) : (
              fname
            )}
          </div>
          <div className="field">
            <label htmlFor="lname">Last Name: </label>
            {edit ? (
              <input
                type="text"
                id="lname"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            ) : (
              lname
            )}
          </div>
          <div className="field">
            <label htmlFor="email">Email: </label>
            {edit ? (
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            ) : (
              email
            )}
          </div>
          <div className="field">
            <label htmlFor="phone">Phone: </label>
            {edit ? (
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            ) : (
              phone
            )}
          </div>
          <div className="field">
            <label htmlFor="country">Country: </label>
            {edit ? (
              <select
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              country
            )}
          </div>
        </div>

        <div className="buttonRow">
          <button type="submit">{edit ? "Submit" : "Edit"}</button>
        </div>
      </form>
    </>
  );
}

export default GeneralInfo;

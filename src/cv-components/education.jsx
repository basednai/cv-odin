import { useState } from "react";
import education from "../assets/educationEntry";

function EducationEntry({ count, edit }) {
  const [school, setSchool] = useState("");
  const [grad, setGrad] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gpa, setGPA] = useState("");
  const [country, setCountry] = useState("");


  return (
    <>
      <div className="educationEntry" id={"educationEntry" + count}>
        <h3 className="allHeadings">Education {count}</h3>
        <div className="formFields">
          <div className="field">
            <label htmlFor="school">School: </label>
            {edit ? (
              <input
                onChange={(e) => setSchool(e.target.value)}
                type="text"
                id="school"
                name="school"
                value={school}
                required
              />
            ) : (
              school
            )}
          </div>
          <div className="field">
            <label htmlFor="graduated">Graduated: </label>
            {edit ? (
              <select
                id="graduated"
                name="graduated"
                value={grad}
                onChange={(e) => setGrad(e.target.value)}
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              grad
            )}
          </div>
          <div className="field">
            <label htmlFor="city">City: </label>
            {edit ? (
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                id="city"
                name="city"
                value={city}
                required
              />
            ) : (
              city
            )}
          </div>
          <div className="field">
            <label htmlFor="state">State: </label>
            {edit ? (
              <input
                onChange={(e) => setState(e.target.value)}
                type="text"
                id="state"
                name="state"
                value={state}
                required
              />
            ) : (
              state
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
          <div className="field">
            <label htmlFor="gpa">GPA: </label>
            {edit ? (
              <input
                onChange={(e) => setGPA(e.target.value)}
                type="text"
                id="gpa"
                name="gpa"
                value={gpa}
                required
              />
            ) : (
              gpa
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  const [edit, setEdit] = useState(true);
  const [educationList, setEducationList] = useState([education]);
  const [keyId, setKey] = useState(1);

  function formSubmit(event) {
    event.preventDefault();

    setEdit(!edit);
  }

  function addEducation() {
    const newEducation = { ...education };
    newEducation["id"] = keyId;
    setKey(keyId + 1);
    setEducationList([...educationList, newEducation]);
    console.log("add", educationList);

  }

  function removeEducation() {
    setEducationList([...educationList.slice(0, -1)]);
  }

  return (
    <>
      <h2 className="allHeadings">Education</h2>
      <form className="sectionWrap" onSubmit={formSubmit}>
        {educationList.map((educationEntry, index) => (
          <EducationEntry
            key={educationEntry.id}
            edit={edit}
            count={index + 1}
          />
        ))}

        <div className="buttonRow">
          {edit && (
            <button type="button" onClick={addEducation}>
              Add Education
            </button>
          )}
          <button type="submit">{edit ? "Submit" : "Edit"}</button>
          {educationList.length > 1 && edit && (
            <button type="button" onClick={removeEducation}>
              Remove Education
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default Education;

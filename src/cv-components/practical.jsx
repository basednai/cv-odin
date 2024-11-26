import { useState } from "react";
import experience from "../assets/experienceEntry.js";

function ExperienceEntry({
  count,
  edit,
}) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [current, setCurrent] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");


  return (
    <>
      <div className="experienceEntry" id={"experienceEntry" + count}>
        <h3 className="allHeadings">Experience {count}</h3>
        <div className="formFields">
          <div className="field">
            <label htmlFor="title">Job Title: </label>
            {edit ? (
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                value={title}
                required
              />
            ) : (
              title
            )}
          </div>
          <div className="field">
            <label htmlFor="company">Company: </label>
            {edit ? (
              <input
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            ) : (
              company
            )}
          </div>
          <div className="field">
            <label htmlFor="current">Current: </label>
            {edit ? (
              <select
                id="current"
                name="current"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            ) : (
              current
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
            <label htmlFor="from">From: </label>
            {edit ? (
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="date"
                id="from"
                name="from"
                value={from}
                required
              />
            ) : (
              state
            )}
          </div>
          <div className="field">
            <label htmlFor="to">State: </label>
            {edit ? (
              <input
                onChange={(e) => setTo(e.target.value)}
                type="date"
                id="to"
                name="to"
                value={to}
                required
              />
            ) : (
              state
            )}
          </div>
          <div className="field">
            <label htmlFor="description">Job Description: </label>
            {edit ? (
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                value={description}
                rows="7"
                cols="60"
                required
              />
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Experience() {
  const [edit, setEdit] = useState(true);
  const [experienceList, setExperienceList] = useState([experience]);
  const [keyId, setKey] = useState(1);

  function formSubmit(event) {
    event.preventDefault();

    setEdit(!edit);
  }

  function addEducation() {
    experienceList;
  }

  function addEducation() {
    const newEducation = { ...experience };
    newEducation["id"] = keyId;
    setKey(keyId + 1);
    setExperienceList([...experienceList, newEducation]);
  }

  function removeEducation() {
    setExperienceList([...experienceList.slice(0, -1)]);
  }

  return (
    <>
      <h2 className="allHeadings">Experience</h2>
      <form className="sectionWrap" onSubmit={formSubmit}>
        {experienceList.map((experienceEntry, index) => (
          <ExperienceEntry
            key={experienceEntry.id}
            edit={edit}
            count={index + 1}
          />
        ))}

        <div className="buttonRow">
          {edit && (
            <button type="button" onClick={addEducation}>
              Add Experience
            </button>
          )}
          <button type="submit">{edit ? "Submit" : "Edit"}</button>
          {experienceList.length > 1 && edit && (
            <button type="button" onClick={removeEducation}>
              Remove Experience
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default Experience;

import { useState, useEffect } from "react";
import { ImLocation, ImSpinner2 } from "react-icons/im";
import Image from "./Image";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "firstName",
      "lastName",
      "location",
      JSON.stringify(firstName, lastName, location)
    );
  }, [firstName, lastName, location]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <div className="logo-spinner">
        <Image />
        <button type="submit" className="spinner">
          {isEditing ? <span></span> : <ImSpinner2 size={25} />}{" "}
        </button>
      </div>
      <label>
        {isEditing ? (
          <input
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <p>FirstName:</p>
            <b>{firstName}</b>
          </div>
        )}
      </label>
      <label>
        {isEditing ? (
          <input
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <p>LastName:</p>
            <b>{lastName}</b>
          </div>
        )}
      </label>
      <label>
        {isEditing ? (
          <input
            placeholder="Enter you office location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <ImLocation size={15} />
            <p>Office Location:</p>
            <b>{location}</b>
          </div>
        )}
      </label>
      <div className="buttons_container">
        {isEditing && (
          <>
            <button onClick={() => setIsEditing(false)} type="reset">
              Cancel
            </button>
            <button type="submit">Save</button>
          </>
        )}
      </div>
    </form>
  );
}

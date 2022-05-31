import { ChangeEvent, FormEvent, useState } from "react";
import { PersonalModel } from "../models/PersonalModel";
import { Birthday } from "./Birthday";

export function PersonalData({
  addPersonalData,
}: {
  addPersonalData: Function;
}) {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    date: "",
    gender: "",
    email: "",
    isOk: false,
  });

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    addPersonalData(
      new PersonalModel(
        personalData.name,
        personalData.lastName,
        personalData.date,
        personalData.gender,
        personalData.email
      )
    );
  }

  function handleChange(ev: ChangeEvent) {
    const eventTarget = ev.target as HTMLFormElement;
    const value =
      eventTarget.value === "checkbox"
        ? eventTarget.checked
        : eventTarget.value;

    setPersonalData({ ...personalData, [eventTarget.name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={personalData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={personalData.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="date">Birthday:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={personalData.date}
            onChange={handleChange}
          />
          <Birthday />
        </div>
      </div>
      <div>
        <p>Gender</p>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          onChange={handleChange}
        />
        <label htmlFor="other">Other</label>
        <input
          type="radio"
          name="gender"
          id="notMention"
          value="prefer not to mention"
          onChange={handleChange}
        />
        <label htmlFor="notMention">Prefer not to mention</label>
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          value={personalData.email}
          placeholder="e-mail"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="isOk">
          Desea recibir información de nuestra newsletter?
        </label>
        <input
          type="checkbox"
          name="isOk"
          id="isOk"
          checked={personalData.isOk}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Acepto</button>
    </form>
  );
}

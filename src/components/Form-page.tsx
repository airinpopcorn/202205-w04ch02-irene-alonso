import { useState } from "react";
import { PersonalModel } from "../models/PersonalModel";
import { AccessData } from "./Access-data";
import { Confirmation } from "./Confirmation";
import { PersonalData } from "./Personal-data";

export function FormPage() {
  const [personalData, setPersonalData] = useState();

  const addPersonalData = (data: PersonalModel) => {
    const updateData = { ...personalData, data };
    setPersonalData(updateData);
    console.log(updateData);
  };

  return (
    <main>
      <h1>Form</h1>
      <h2>Personal Data</h2>
      <PersonalData addPersonalData={addPersonalData}></PersonalData>
      <h2>Access Data</h2>
      <AccessData />
      <h2>Confirmation</h2>
      <Confirmation fullData={personalData} />
      <h2>Login</h2>
    </main>
  );
}

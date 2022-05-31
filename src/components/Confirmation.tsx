import { PersonalModel } from "../models/PersonalModel";

export function Confirmation({ fullData }: { fullData: PersonalModel }) {
  return (
    <ul>
      <li key={fullData.name}>{fullData.name}</li>
      <li key={fullData.lastName}>{fullData.lastName}</li>
      <li key={fullData.date}>{fullData.date}</li>
      <li key={fullData.gender}>{fullData.gender}</li>
      <li key={fullData.email}>{fullData.email}</li>
      <li>
        {fullData.recieveInfo
          ? "Quiere recibir la newsletter"
          : "No quiere recibir la newsletter"}
      </li>
    </ul>
  );
}

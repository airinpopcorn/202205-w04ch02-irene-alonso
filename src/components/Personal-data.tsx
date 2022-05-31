export function PersonalData() {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <div>
          <label htmlFor="date">Birthday:</label>
          <input type="date" id="date" name="date" />
        </div>
      </div>
      <div>
        <p>Gender</p>
        <input type="radio" name="female" id="female" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="male" id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="other" id="other" />
        <label htmlFor="other">Other</label>
        <input type="radio" name="notMention" id="notMention" />
        <label htmlFor="notMention">Prefer not to mention</label>
      </div>
      <div>
        <input type="email" name="email" id="email" placeholder="e-mail" />
      </div>
      <div>
        <label htmlFor="isOk">
          Desea recibir información de nuestra newsletter?
        </label>
        <input type="checkbox" name="isOk" id="isOk" />
      </div>
    </form>
  );
}

export function AccessData() {
  return (
    <form action="">
      <input type="text" placeholder="username" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
      <label htmlFor="account">Account type:</label>
      <select name="account" id="account">
        <option value="personal">Personal</option>
        <option value="personal">Pro</option>
        <option value="personal">Bussiness</option>
      </select>
    </form>
  );
}

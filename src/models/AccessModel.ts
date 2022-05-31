export class AccessModel {
  password: string;
  repeatPassword: string;

  constructor(public username: string, public accountType: string) {
    this.repeatPassword = "";
    this.password = "";
  }
}

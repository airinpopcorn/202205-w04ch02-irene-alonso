export class PersonalModel {
  recieveInfo: boolean;
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public gender: string,
    public email: string
  ) {
    this.recieveInfo = false;
  }
}

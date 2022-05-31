export class PersonalModel {
  recieveInfo: boolean;
  constructor(
    public name: string = "",
    public lastName: string = "",
    public date: string = "",
    public gender: string = "",
    public email: string = ""
  ) {
    this.recieveInfo = false;
  }
}

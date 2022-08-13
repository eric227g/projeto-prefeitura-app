export interface IUser {
  id: string | null,
  email: string,
  password: string,
  name: string,
  firstname: string,
  secondname: string,
  datebirth: string,
}

class ModelUser implements IUser {
  private _id: string | null;
  private _email: string;
  private _password: string;
  private _name: string;
  private _firstname: string;
  private _secondname: string;
  private _datebirth: string;

  constructor(
    id: string | null,
    email: string,
    password: string,
    name: string,
    firstname: string,
    secondname: string,
    datebirth: string
  ) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._name = name;
    this._firstname = firstname;
    this._secondname = secondname;
    this._datebirth = datebirth
  }
  public get id(): string | null {
    return this._id;
  }
  public set id(value: string | null) {
    this._id = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public get secondname(): string {
    return this._secondname;
  }
  public set secondname(value: string) {
    this._secondname = value;
  }
  public get datebirth(): string {
    return this._datebirth;
  }
  public set datebirth(value: string) {
    this._datebirth = value;
  }

  public toJson() {
    return{
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      firstname: this.firstname,
      secondname: this.secondname,
      datebirth: this.datebirth
    }
  }
}

export default ModelUser

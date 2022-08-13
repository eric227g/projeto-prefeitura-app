export interface IRelato {
  id: string | null,
  rua: string,
  descricao: string,
  bairro: string,
}

class ModelRelato implements IRelato {
  private _id: string | null;
  private _rua: string;
  private _descricao: string;
  private _bairro: string;

  constructor(
    id: string | null,
    rua: string,
    descricao: string,
    bairro: string,
  ) {
    this._id = id;
    this._rua = rua;
    this._bairro = bairro;
    this._descricao = descricao;
  }
  public get id(): string | null {
    return this._id;
  }
  public set id(value: string | null) {
    this._id = value;
  }
  public get rua(): string {
    return this._rua;
  }
  public set rua(value: string) {
    this._rua = value;
  }
  public get descricao(): string {
    return this._descricao;
  }
  public set descricao(value: string) {
    this._descricao = value;
  }
  public get bairro(): string {
    return this._bairro;
  }
  public set bairro(value: string) {
    this._bairro = value;
  }


  public toJSON() {
    return {
      id: this.id,
      rua: this.rua,
      descricao: this.descricao,
      bairro: this.bairro,
    }
  }
}

export default ModelRelato;

export interface IRelato {
  id: string,
  rua: string,
  descricao: string,
  bairro: string,
  imagem: string
}

class ModelRelato implements IRelato {
  private _id: string;
  private _rua: string;
  private _descricao: string;
  private _bairro: string;
  private _imagem: string;
  static id: any;

  constructor(
    id: string,
    rua: string,
    descricao: string,
    bairro: string,
    imagem: string,
  ) {
    this._id = id;
    this._rua = rua;
    this._bairro = bairro;
    this._imagem= imagem;
    this._descricao = descricao
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
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
  public get imagem(): string {
    return this._imagem;
  }
  public set imagem(value: string) {
    this._imagem = value;
  }

  public toJSON() {
    return {
      id: this.id,
      rua: this.rua,
      descricao: this.descricao,
      imagem: this.imagem,
      bairro: this.bairro,
    }
  }
}

export default ModelRelato;

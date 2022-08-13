import ModelRelato, { IRelato } from "../model/ModelRelato";
import RelatoRepositorio from "../repositorio/relato";


export type CreateRelatoDTO = Omit<IRelato, 'id'>;

class CreateRelatoController {
  public execute({ rua, descricao, bairro }: CreateRelatoDTO){
    const relatoRepositorio = new RelatoRepositorio();
    const relatoModel = new ModelRelato(null, rua, descricao, bairro);
    console.log('deu certo')
    return relatoRepositorio.add(relatoModel)
    .catch(err => {
      console.log(err);
    });
  }
}

export default CreateRelatoController;


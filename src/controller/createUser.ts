import ModelUser , { IUser } from "../model/ModelUser";
import UserRepository from "../repositorio/user";


export type CreateVehicleDTO = Omit<IUser, 'id'>;

class CreateUserController {
  public execute({ email, password, name, firstname, secondname, datebirth }: CreateVehicleDTO){
    const userRelatorio = new UserRepository();
    const userModel = new ModelUser(null, email, password,name, firstname, secondname, datebirth );
    console.log('deu certo')
    return userRelatorio.add(userModel)
    .catch(err => {
      console.log(err);
    });
  }
}

export default CreateUserController;

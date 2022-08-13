import { collection, addDoc } from "firebase/firestore";
import ModelUser from "../model/ModelUser";
import { db } from "../utils/firebase";



class UserRepository  {
  protected readonly _collection;

  constructor() {
    this._collection = collection(db, 'usuario');
  }


  public async add(modelUser: ModelUser){
    // const newRelato = doc(this._collection);

    // modelRelato.id = newRelato.id;
    // console.log(modelRelato.id)

    try {
      await addDoc(collection(db, 'usuarios'), modelUser.toJson())

      return modelUser.id;
    } catch (erro) {
      console.log(erro)
    }
  }
}

export default UserRepository

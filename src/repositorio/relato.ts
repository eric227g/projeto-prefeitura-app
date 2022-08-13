import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import ModelRelato from '../model/ModelRelato';

class RelatoRepositorio  {
  protected readonly _collection;

  constructor() {
    this._collection = collection(db, 'Relatorio');
  }


  public async add(modelRelato: ModelRelato){
    // const newRelato = doc(this._collection);

    // modelRelato.id = newRelato.id;
    // console.log(modelRelato.id)

    try {
      await addDoc(collection(db, 'Relatorio'), modelRelato.toJSON())

      return modelRelato.id;
    } catch (erro) {
      console.log(erro)
    }
  }
}

//   public async update(item: VehicleModel): Promise<boolean> {
//     try {
//       await this._collection.doc(item.id!).update(item.toJSON());

//       return true;
//     } catch (err: any) {
//       throw new AppError(err.message, 500, 'error');
//     }
//   }

//   public async delete(id: string): Promise<boolean> {
//     try {
//       await this._collection.doc(id).delete();

//       return true;
//     } catch (err: any) {
//       throw new AppError(err.message, 500, 'error');
//     }
//   }

//   public async findAll(): Promise<VehicleModel[]> {
//     try {
//       const getVehicles = this._collection.get();

//       const vehiclesModels = await getVehicles.then(collection => {
//         const docsToJSON = collection.docs.map(vehicle => {
//           const vehicleData = vehicle.data();

//           return new VehicleModel(
//             vehicleData.id,
//             vehicleData.image,
//             vehicleData.name,
//             vehicleData.description,
//             vehicleData.price,
//             vehicleData.year,
//             vehicleData.km,
//           );
//         });

//         return docsToJSON;
//       });

//       return vehiclesModels;
//     } catch (err: any) {
//       throw new AppError(err.message, 500, 'error');
//     }
//   }
// }

export default RelatoRepositorio;

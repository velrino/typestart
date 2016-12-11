import { DaoInterface } from './dao.interface';
import { AnimalDao } from './animal.dao';
import { Animal} from './../OO/Animal';

let dao : DaoInterface = new AnimalDao();
let animal: Animal = new Animal('Shazam');

dao.insert( animal );
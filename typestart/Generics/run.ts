import { Dao } from './dao';
import { Animal} from './../OO/Animal';
import { Cavalo} from './../OO/Cavalo';

let dao : Dao<Cavalo> = new Dao<Cavalo>();

let animal: Animal = new Animal('Aslan');
let cavalo: Animal = new Animal('Shazam');

dao.insert( animal );
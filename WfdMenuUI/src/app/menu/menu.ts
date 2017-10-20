import { Appetizers } from './appetizers';
import { Desserts } from './desserts';
import { Entrees } from './entrees';
export class Menu {
  public appetizers: Appetizers;
  public desserts: Desserts;
  public entrees: Entrees;

  constructor( appetizers: Appetizers, desserts: Desserts, entrees: Entrees) {
        this.appetizers = appetizers;
        this.desserts = desserts;
        this.entrees = entrees;
    }

}

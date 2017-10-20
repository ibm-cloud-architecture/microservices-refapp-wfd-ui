export class Appetizers {
    public order: number;
    public menu: string[];
    public type: string;

    constructor( order: number, menu: string[], type: string) {
        this.order = order;
        this.menu = menu;
        this.type = type;
    }

    getOrder() {
      return this.order;
    }
}

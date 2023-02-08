export class Order {
  name: string;
  address: string;
  card: number;
  total: number;

  constructor() {
    this.name = '';
    this.address = '';
    this.card = 0;
    this.total = 0;
  }
}

import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public OrderNumber:number;
  public OrderDueDate:any;
  public name:any;
  public CustomerAddress:any;
  public OrderTotal:any;
  public ingredients: Ingredient[];

  constructor(name: string,OrderNumber:number, OrderTotal:any,CustomerAddress:any, OrderDueDate:any,Customerbuyername:any,desc: string, imagePath: string, ingredients: Ingredient[]) {

    this.OrderNumber=OrderNumber;
    this.OrderTotal=OrderTotal;
    this.CustomerAddress=CustomerAddress;
    this.OrderDueDate=OrderDueDate;
    this.name=Customerbuyername;
    this.ingredients = ingredients;
  }
}

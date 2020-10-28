import { CartItem } from '../models/cart.item.model';
import { Cart } from '../models/cart.model';

export class CartUtil {
    public static get(): Cart{
        //Recupera os dados do localStorage
        const data = localStorage.getItem('petshopcart');

        //caso não haja dados, retorna um novo carrinho
        if(!data)
            return new Cart();
        
        //Caso haja dados, retorna o carrinho
        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string){
        //Obtem o carrinho
        let cart = this.get();

        //Gera o novo item
        const item = new CartItem(id, product, quantity, price, image);

        //Adicionar ao Carrinho
        cart.items.push(item);

        localStorage.setItem("petshopcart", JSON.stringify(cart));

    }

    public static update(cart: Cart){
        localStorage.setItem('petshopcart', JSON.stringify(cart));
    }

    public static clear(){
        localStorage.removeItem('petshopcart');
    }
}
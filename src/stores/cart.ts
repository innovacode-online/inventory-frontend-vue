import { ref } from "vue";
import { defineStore } from "pinia";

import type { ICart, IProductsResponseData } from "@/interface";
import { useToastStore } from "./toast";
import saleService from "@/services/saleService";
import { handleAxiosError } from "@/helpers/handle-axios-error";
import { useSaleStore } from "./sales";
import router from "@/router";



export const useCartStore = defineStore('cart', () => {
    
    const total = ref(0);
    const cart = ref<ICart[]>([]);

    const client = ref('');

    const toastStore = useToastStore();
    const saleStore = useSaleStore();


    function addProductCart( product: IProductsResponseData, quantity: number){        
        const productInCart = cart.value.find(item => item.product.id === product.id);

        if( productInCart ){
            productInCart.quantity += quantity;
            calculateTotal();
            return;
        }
        
        cart.value.push({ product, quantity });
        calculateTotal();
    }

    function calculateTotal() {
        let subTotal = 0

        cart.value.forEach(({product, quantity }) => {
            subTotal += product.price * quantity
        });

        total.value = subTotal;

    }

    function removeProductFromCart(id: number){
        const product = cart.value.findIndex(item => item.product.id === id);


        if( product !== -1 ){
            cart.value.splice(product, 1);
            calculateTotal();
        }
    }


    async function generateOrder() {
        const products = cart.value.map(({product, quantity}) => {
            return {
                id: product.id,
                quantity
            }
        })

        const order = {
            client: client.value,
            total: total.value,
            products,
        }

        try {
            const message = await saleService.create(order);
            toastStore.showToast('success', message);

            saleStore.getAllSales();
            router.push('/sales')
        } catch (error) {
            console.log(order);
            handleAxiosError(error)
        }
    }
        

    
    return {
        cart,
        total,
        client,

        generateOrder,
        addProductCart,
        removeProductFromCart,
    }
})
<script lang="ts" setup>
import { useCartStore } from '../../stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();
const { cart, total, client } = storeToRefs(cartStore);

</script>

<template>
    <form @submit.prevent="cartStore.generateOrder()">
        <h2>Detalles de la venta</h2>
        <div v-show="cart.length !== 0" class="form-control">
            <label for="client">Nombre del cliente: </label>
            <input v-model="client" type="text" id="client" placeholder="Nombre del cliente">
        </div>

        <p class="text-gray-400 uppercase text-center font-bold" v-show="cart.length === 0">El carrito esta vacio</p>

        <ul class="space-y-4 mb-8">
            <li class="flex justify-between items-center bg-white shadow-sm p-2 rounded-md"
                v-for="{ product, quantity } in cart" :key="product.id">
                <div>
                    <h4 class="font-bold">{{ product.name }}</h4>
                    <p class="font-medium">Cantidad: {{ quantity }}</p>
                </div>
                <div>
                    <button @click="cartStore.removeProductFromCart(product.id)" class="btn-delete px-2">Eliminar</button>
                </div>
            </li>
        </ul>

        <p v-show="cart.length !== 0" class="font-semibold text-xl mb-8">Total: <span class="font-normal">{{ total }} Bs</span></p>
        <button type="submit"  v-show="cart.length !== 0" class="btn-primary">
            Generar venta
        </button>

    </form>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();

</script>

<template>
    <nav class="sidemenu flex flex-col">
        <h1 class="mb-10 text-xl">Nombre del usuario</h1>
        
        <ul>
            <li>
                <RouterLink :to="{name: 'profile'}" class="nav__menu--item">
                    <i class="uil uil-apps"></i>
                    Perfil
                </RouterLink>
            </li>

            <li>
                <RouterLink :to="{name: 'categories'}" class="nav__menu--item">
                    <i class="uil uil-layer-group"></i>
                    Categorias
                </RouterLink>
            </li>
        </ul>
    
    
    
    </nav>

</template>

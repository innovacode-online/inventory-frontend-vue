import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/auth/AuthLayout.vue'
import RooLayout from '@/layouts/root/RooLayout.vue'
import authService from '@/services/authService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => RooLayout,
      redirect: 'profile',
      meta: { requiresAuth: true },
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/profile/ProfileView.vue')
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('@/views/categories/CategoriesView.vue')
        },
        {
          path: 'categories/new',
          name: 'new-category',
          component: () => import('@/views/categories/NewCategoryView.vue')
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => AuthLayout,
      children: [
        {
          path: 'login', // => /auth/login
          name: 'auth-login',
          component: () => import('@/views/auth/LoginView.vue')
        },
      ]
    }
  ]
})


router.beforeEach(async (to, form, next) => {

  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if( requiresAuth ){
    const token = localStorage.getItem('AUTH_TOKEN_INVENTORY');
   
    // VALIDAR EL TOKEN
    const user = await authService.validate(token!);
    
    if( !token || !user ){
      next({ path: '/auth/login' })
      return;
    }

    next();
  }
  
  next();
})

export default router

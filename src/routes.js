import Home from './components/VueRouter/Home.vue'
import Product from './components/VueRouter/Product.vue'
import ProductDetail from './components/VueRouter/ProductDetail.vue'
import ProductEdit from './components/VueRouter/ProductEdit.vue'

const routes = [
  {
    path: '/vue-router',
    component: Home
  },
  {
    path: '/vue-router-product',
    component: Product,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetail
      },
      {
        path: 'edit/:id',
        component: ProductEdit
      }
    ]
  },
  // {
  //   path: '/vue-router-product/:id',
  //   component: ProductDetail
  // },
]

export default routes
import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // = data
        products: []
    },
    getters: { // = computed properties
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0)
        }
    },
    actions: { // = methods
        fetchProducts ({commit}) {
            return new Promise((resolve, reject) => {
                // make the call
                // run setProducts mutation
                shop.getProducts(products => {
                    context.commit('setProducts', products)
                    resolve()
                })
            })
        }
    },
    mutations: {
        setProducts (state, products) {
            // update products
            set.products = products
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'
import Products from "@/components/Products.vue";
import Product from "@/components/Product.vue";
import { VCard, BCarousel, VBHover } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'


Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper = null;

describe('Products vue', () => {
    let store;
    let actions;

    beforeEach(() => {
        wrapper = mount(Products, {
            propsData: {
                products: [{
                    id: "123",
                    name: "name1",
                    hero: "hero href",
                    images: {}
                }
                ]
            }
        });
        actions = {
            handleHover: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                Products: {
                    actions,
                    store
                }
            }
        })
        console.log("************* before*************")
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('if wrapper exists ', () => {
        const products = wrapper.attributes('products');
        //  console.log(wrapper.attributes());
        //console.log(products);
        expect(products).toBe('[object Object]');
    });


});

describe('Product vue', () => {

    it('check Product component exists', () => {
        const wrapper1 = mount(Product, {
            propsData: { product: { id: 'id1', name: 'name1', hreo: { href: '' }, images: [{ href: '' }] } },
            isHovered: true,
            directives: {
                "v-card": VCard,
                "b-carousel": BCarousel,
                'b-hover': VBHover
            }
        },
        );
        console.log(wrapper1.exists())
    });
});

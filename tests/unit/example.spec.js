import Vue from 'vue'
import Products from "@/components/Products.vue";
import Product from "@/components/Product.vue";
import { VCard, BCarousel, VBHover, BCarouselSlide } from "bootstrap-vue";
import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'


Vue.use(Vuetify)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)

describe('Products vue', () => {
    let wrapper = null;
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
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders Products.vue', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('match snapshots', () => {
        expect(wrapper).toMatchSnapshot();
    })


});

describe('Product vue', () => {
    let wrapper1 = null;
    beforeEach(() => {
        wrapper1 = mount(Product, {
            propsData: { product: { id: 'id1', name: 'name1', hero: { href: 'hero.jpg' }, images: [{ href: 'image123.jpg', name: 'img1' }, { href: 'image1.jpg', name: 'img2' }] } },
            isHovered: true,
            directives: {
                "v-card": VCard,
                "<b-carousel>": BCarousel,
                "<b-carousel-slide>": BCarouselSlide,
                'b-hover': VBHover
            }
        }

        );
    });
    afterEach(() => {
        wrapper1.destroy();
    });

    it('renders Product.vue', () => {
        expect(wrapper1.exists()).toBe(true);
    });

    it('match snapshots', () => {
        expect(wrapper1).toMatchSnapshot();
    })

    it('checks isHovered is false', () => {
        expect(wrapper1.vm.isHovered).toBe(false);
    });
    it('checks isHovered is true', () => {
        wrapper1.vm.isHovered = true;
        expect(wrapper1.vm.isHovered).toBe(true);
    });

    it('checks image is rendered', () => {
        const image = wrapper1.findAll('.v-card img');
        expect(image.exists()).toBeTruthy
    });
    it('checks slide is rendered', async () => {
        await wrapper1.setData({
            isHovered: true
        });
        const slide = wrapper1.findAll('.v-card .carousel .carousel-item img');
        expect(slide.exists()).toBeTruthy();
    });
    it('checks slide length is 2', async () => {
        await wrapper1.setData({
            isHovered: true
        });
        const slide = wrapper1.findAll('.v-card .carousel .carousel-item img');
        expect(slide.length).toBe(2)
    });

    it('image is visible', async () => {
        const image = wrapper1.find(".v-card img");
        expect(image.isVisible()).toBe(true);
    });
    it('carousel is visible', async () => {
        await wrapper1.setData({
            isHovered: true
        });
        const slide = wrapper1.findAll('.v-card .carousel .carousel-item img');
        expect(slide.isVisible()).toBe(true);

    });
});

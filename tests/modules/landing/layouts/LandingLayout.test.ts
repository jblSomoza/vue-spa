import { shallowMount } from "@vue/test-utils";
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import router from "@/router";

describe('LandingLayout', () => {
    test('should be render correctly', () => {
        const wrapper = shallowMount(LandingLayout, {
            global: {
                plugins: [router]
            }
        });

        expect(wrapper.find('header').exists()).toBe(true);
        expect(wrapper.find('footer').exists()).toBe(true);
        expect(wrapper.find('main').exists()).toBe(true);
    });
});
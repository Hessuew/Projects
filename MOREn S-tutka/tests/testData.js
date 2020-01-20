import { shallowMount } from '@vue/test-utils';
import Layout from '@src/views/Layout.vue';

test('Layout', () => {
    const wrapper = shallowMount(Layout);

    wrapper.setData({ appHeader: ' ' });
    expect(wrapper.find('.error').exists()).toBe(true);

    wrapper.setData({ cities: ["TestCity1", "TestCity2"] });
    expect(wrapper.find('.error').exists()).toBe(false);
})
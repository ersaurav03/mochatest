import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  });
  it('check counter after increment is pressed', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.counter).to.include(0);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.counter).to.include(1);
  });
});

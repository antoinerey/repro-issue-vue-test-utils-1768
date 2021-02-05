import HelloWorld from '../../src/components/HelloWorld.vue'
import { mount, createLocalVue } from '@vue/test-utils'

it('works 1', () => {
  const localVue = createLocalVue()
  const wrapper = mount(HelloWorld, {
    localVue,
  })

  console.log(wrapper)
})

it('works 2', () => {
  const localVue = createLocalVue()
  const wrapper = mount(HelloWorld, {
    localVue,
  })

  console.log(wrapper)
})

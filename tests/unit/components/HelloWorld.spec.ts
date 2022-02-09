import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Jest'
    const wrapper = shallowMount(HelloWorld, { props: { msg } })
    expect(wrapper.text()).toMatch(msg)
  })
})

import { mount, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

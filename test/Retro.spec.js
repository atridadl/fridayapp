import { shallowMount, RouterLinkStub, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Retro from '@/pages/retro.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Retro', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      keep: () => [
        {
          id: 0,
          name: 'keep0'
        }
      ],
      add: () => [
        {
          id: 0,
          name: 'add0'
        }
      ],
      more: () => [
        {
          id: 0,
          name: 'more0'
        }
      ],
      less: () => [
        {
          id: 0,
          name: 'less0'
        }
      ]
    },
    store = new Vuex.Store({
      getters
    })
  })

  it('lists are properly populated', () => {
    const wrapper = shallowMount(Retro, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).toMatch('keep0');
    expect(wrapper.text()).toMatch('add0');
    expect(wrapper.text()).toMatch('more0');
    expect(wrapper.text()).toMatch('less0');
  })
})

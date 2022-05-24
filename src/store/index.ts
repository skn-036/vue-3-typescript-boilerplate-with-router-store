import { InjectionKey } from 'vue'
import { Store, createStore, useStore as useRootStore } from 'vuex'
import State from '@/types/store/State'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    token: 'hello',
  },
  actions: {

  },
  mutations: {

  }
})

export const useStore = () => {
  return useRootStore(key)
}
import { createStore } from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

const store = createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    foo(state) {
      return `root-getters/${state.foo}`;
    },
  },
});

export default store;

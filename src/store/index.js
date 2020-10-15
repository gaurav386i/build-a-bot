import { createStore } from 'vuex';

import robotsModule from './modules/robots';

const store = createStore({
  modules: {
    robots: robotsModule,
  },
});

export default store;

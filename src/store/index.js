import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
});

export default store;

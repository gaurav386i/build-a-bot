export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robots.cart.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};

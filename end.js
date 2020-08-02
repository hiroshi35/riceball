new Vue({
  el: '#app',
  data: {
    schoolStatic: [],
    schoolRank: ['台中一中','文華高中','大里高中'],
    test: '台中一中'
  },
  mounted() {
    this.getSheet();
  },
  methods: {
    rank (num) {},
    getSheet () {
    }
  },
});
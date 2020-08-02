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
      const url = 'https://docs.google.com/spreadsheets/d/1fU4tkYNFNmR4olsxIPxtErTEsDomElehJxySmso0Hrg/edit?usp=sharing';
      const SpreadSheet = SpreadsheetApp.openByUrl(url);
      console.log(SpreadSheet.getName());
      console.log('Aloha');
    }
  },
});
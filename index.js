const app = Vue.createApp({
  data() {
    return {
      number1: null,
      number2: null,
      result: null,
      operator: null
    };
  },
  methods: {
    calculate() {
      switch(this.operator) {
        case 'add':
          this.result = this.number1 + this.number2;
          break;
        case 'subtract':
          this.result = this.number1 - this.number2;
          break;
        case 'multiply':
          this.result = this.number1 * this.number2;
          break;
        case 'divide':
          this.result = this.number1 / this.number2;
          break;
        default:
          this.result = 'Invalid Operation!!';
      }
    }
  }
});

app.mount('#app');

const app = Vue.createApp({
 data() {
   return {
     showBooks: false,
     title: 'Book Title',
     author: 'Book Author',
     age: 50
   }
 },
 methods: {
   changeTitle(title) {
    this.title = title;
   },
   toggleBooks() {
     this.showBooks = !this.showBooks
   }
 }
});

app.mount('#app');
<template>
  <div>
    <h1>Daily Inspirational Quote</h1>
    <QuoteDisplay :quote="quotesStore.currentQuote" @quoteDisplayed="onQuoteDisplayed" />  
    <button @click="quotesStore.getRandomQuote">Novi citat</button>
    <p>Broj znakova u citatu: {{ characterCount }}</p>
  </div>
  <div>
    <input type="text" v-model="userQuote" placeholder="Napiši svoj omiljeni citat">
    <p>Tvoj omiljeni citat:</p>
    <div>{{ userQuote }}</div>
    <div><router-link to="/all-quotes">Svi citati</router-link></div>
  </div>
</template>

  
<script>
import { ref } from 'vue';
import { useQuotesStore } from '@/stores/quotesStore';
import QuoteDisplay from './QuoteDisplay.vue';

export default {
  components: {
    QuoteDisplay 
  },
  setup() {
    const quotesStore = useQuotesStore();
    const userQuote = ref(''); 

    onMounted(() => {
      quotesStore.getRandomQuote();
    });

    return { 
      quotesStore,
      userQuote 
    };
  },
  computed: {
    characterCount() {
      return this.quotesStore.currentQuote.length;
    }
  }
}
</script>


  
  <style scoped>
  div {
    text-align: center;
    margin-top: 50px;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }

  input {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 5px;
  }
</style>

  
<template>
    <div>
      <h1>All Famous Quotes</h1>
      <ul>
        <li v-for="(quote, index) in quotesStore.quotes" :key="index">{{ quote }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useQuotesStore } from '@/stores/quotesStore'; 
  
  export default {
    setup() {
      const quotesStore = useQuotesStore();
      return { quotesStore };
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    font-size: 16px;
  }
  </style>
  
<template>
    <div>
      <p>{{ quote }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      quote: String
    },
    watch: {
      quote(newVal) {
        if (newVal) {
          this.$emit('quoteDisplayed');
        }
      }
    }
  }
  </script>
  
  <style scoped>
    p {
      font-size: 18px;
      color: #555;
    }
  </style>
  
import { defineStore } from 'pinia';

export const useQuotesStore = defineStore('quotesStore', {
  state: () => ({
    quotes: [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Life is what happens when you’re busy making other plans. – John Lennon",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. – Jimmy Dean",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
          "With the new day comes new strength and new thoughts. – Eleanor Roosevelt",
          "It is never too late to be what you might have been. – George Eliot",
          "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. – Helen Keller",
          "The secret of getting ahead is getting started. – Mark Twain",
          "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. – Helen Keller",
          "Whoever is happy will make others happy too. – Anne Frank",
          "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
          "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. – Swami Sivananda",
          "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
          "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
          "Always remember that you are absolutely unique. Just like everyone else. – Margaret Mead",
          "Don't judge each day by the harvest you reap but by the seeds that you plant. – Robert Louis Stevenson",
          "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
          "Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin",
          "The best preparation for tomorrow is doing your best today. – H. Jackson Brown, Jr.",
          "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. – Francis of Assisi",
          "Happiness is not something you postpone for the future; it is something you design for the present. – Jim Rohn",
          "Try to be a rainbow in someone's cloud. – Maya Angelou",
          "We know what we are, but know not what we may be. – William Shakespeare",
          "No act of kindness, no matter how small, is ever wasted. – Aesop",
          "Love yourself. It is important to stay positive because beauty comes from the inside out. – Jenn Proske",
          "Let us always meet each other with smile, for the smile is the beginning of love. – Mother Teresa",
          "You will face many defeats in life, but never let yourself be defeated. – Maya Angelou",
          "Let us sacrifice our today so that our children can have a better tomorrow. – A. P. J. Abdul Kalam",
          "The best way to predict your future is to create it. – Abraham Lincoln",
          "Spread love everywhere you go. Let no one ever come to you without leaving happier. – Mother Teresa",
          "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
      ],
    currentQuote: '',
  }),
  actions: {
    getRandomQuote() {
      if (this.quotes.length > 0) {
        this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      }
    }
  }
});
// vite.config.ts
export default {
    server: {
      proxy: {
        '/api': 'http://localhost:3000' // vercel dev runs at 3000 by default
      }
    }
  };
  
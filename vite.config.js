
export default {
    server: {
      proxy: {
        '/api': {
            target: 'https://api.collegefootballdata.com/teams',
            changeOrigin: true,
            secure: false,      
            ws: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
      }
    },
  }
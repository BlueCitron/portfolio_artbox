module.exports = {
  apps : [{
    name: 'ARTBOX_CLIENT',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 9300,
      HOST: '0.0.0.0',
    }
  }],
};

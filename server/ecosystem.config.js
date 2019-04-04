module.exports = {
  apps : [{
    name: 'ARTBOX_SERVER',
    script: 'index.js',
    args: [ 'serve' ],
    instances: 1,
    autorestart: false,
    watch: [ 'src' ],
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'development',
      PORT: 3010,
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 9310,
      HOST: '0.0.0.0',
    }
  }],
};

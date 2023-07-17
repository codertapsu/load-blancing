module.exports = {
  apps: [
    {
      name: 'load-balance',
      script: 'dist/index.js',
      instances: 4,
      watch: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "logs/errors.log",
      out_file: "logs/app.log"
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker'],
    // },
  ],

  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
};

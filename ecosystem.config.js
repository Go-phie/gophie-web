module.exports = {
   apps: [{
      script: 'server.js',
      name: 'Gophie-Web',
   }],

   deploy: {
      production: {
         user: 'ubuntu',
         host: 'ec2-35-178-176-58.eu-west-2.compute.amazonaws.com',
         key: './gophie-private-key.pem',
         ref: 'origin/master',
         ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
         repo: 'https://github.com/Go-phie/gophie-web.git',
         path: '/home/ubuntu/gophie-web',
         'post-deploy': 'yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
      }
   }
};

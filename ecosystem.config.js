module.exports = {
  apps: [
    {
      name: "resume",
      script: "serve /home/h/resume/docs -p 8080",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}

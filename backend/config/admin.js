module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8c393eff0c250b332c6e206f0ef394ba'),
  },
});

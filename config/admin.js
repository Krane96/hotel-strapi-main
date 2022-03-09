module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7a8c9475ba7c1475445ffa8f5466ae1f'),
  },
});

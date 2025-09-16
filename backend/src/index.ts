export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // Log database connection status
    strapi.db.connection.raw('SELECT 1')
      .then(() => {
        console.log('✅ Database connected successfully!');
        console.log('🚀 Strapi is ready to serve requests');
        console.log('');
      })
      .catch((error) => {
        console.error('❌ Database connection failed:', error.message);
        console.log('');
      });
  },
};
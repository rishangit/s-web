/**
 * webpage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::webpages.webpage');


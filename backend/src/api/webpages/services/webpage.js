/**
 * webpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webpages.webpage');


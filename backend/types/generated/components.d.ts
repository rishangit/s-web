import type { Attribute, Schema } from '@strapi/strapi';

export interface PrimarySchema extends Schema.Component {
  collectionName: 'components_link_buttons';
  info: {
    description: 'A button component with label and URL';
    displayName: 'Link Button';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'primary.schema': PrimarySchema;
    }
  }
}

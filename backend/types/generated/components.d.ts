import type { Attribute, Schema } from '@strapi/strapi';

export interface AddonsLinkButton extends Schema.Component {
  collectionName: 'components_addons_link_buttons';
  info: {
    displayName: 'Link Button';
  };
  attributes: {
    Button: Attribute.Component<'primary.schema'>;
  };
}

export interface PrimarySchema extends Schema.Component {
  collectionName: 'components_link_buttons';
  info: {
    description: 'A button component with label and webpage relation';
    displayName: 'Link Button';
    icon: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    webpage: Attribute.Relation<
      'primary.schema',
      'oneToOne',
      'api::webpages.webpage'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'addons.link-button': AddonsLinkButton;
      'primary.schema': PrimarySchema;
    }
  }
}

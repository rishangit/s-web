# Component Structure Documentation

## Overview

This Strapi backend now includes a hierarchical component structure with two categories:

1. **Primary Components** - Base components with core functionality
2. **Addon Components** - Wrapper components that use Primary components

## Component Categories

### 1. Primary Category

#### Link Button (Primary)
- **Path**: `src/components/link-button-primary/`
- **Collection Name**: `components_link_button_primaries`
- **Display Name**: "Link Button"
- **Description**: "A primary button component with label and URL"
- **Attributes**:
  - `label` (string, required) - The text displayed on the button
  - `url` (string, required) - The URL the button links to

### 2. Addon Category

#### Link Button (Addon)
- **Path**: `src/components/addon/link-button/`
- **Collection Name**: `components_addon_link_buttons`
- **Display Name**: "Link Button"
- **Description**: "An addon component that contains a Link Button (Primary)"
- **Attributes**:
  - `linkButton` (component, required) - References the Primary Link Button component

## Component Relationship

```
Addon LinkButton
    └── Contains: Primary LinkButton
            ├── label (string)
            └── url (string)
```

## Usage in Strapi Admin

1. **Access Components**: Go to Content-Type Builder → Components
2. **Primary Components**: Use directly in content types
3. **Addon Components**: Use as wrappers that contain Primary components

## Benefits of This Structure

1. **Modularity**: Primary components can be reused across different Addon components
2. **Flexibility**: Addon components can add additional functionality or styling
3. **Maintainability**: Changes to Primary components automatically affect all Addon components
4. **Scalability**: Easy to add new Addon components that use existing Primary components

## Example Usage

When creating content, you can:
- Use Primary LinkButton directly for simple button needs
- Use Addon LinkButton when you need additional wrapper functionality
- The Addon LinkButton will always contain a Primary LinkButton with its label and URL properties

## TypeScript Support

Both components are fully typed in `types/generated/contentTypes.d.ts`:
- `ComponentLinkButtonPrimaryLinkButton`
- `ComponentAddonLinkButtonLinkButton`

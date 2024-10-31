# Bigup Web Gatsby

A Gatsby website for Bigup Web Hosting

## Styles

We are using SCSS Modules because I don't like defining HTML elements in the style files - I'd rather keep styles and markup separate. Also, CSS Modules generates a real CSS file, not a dump in the head like Styled Components.

One drawback to CSS Modules, is the incompatibility with underscores making my vanilla BEM syntax impossible. :(

## Usage

**Linting**

`npm run lint-fix`

# Header

## Import

### Component
```javascript
import { Header } from '@uiproto/blog';
```
### Types
```javascript
import { HeaderProps } from '@uiproto/blog';
import { HeaderClasses } from '@uiproto/blog';
```

### Styles creator
```javascript
import { HeaderStyles } from  '@uiproto/blog';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
color | 'error' \| 'info' \| 'primary' \| 'secondary' \| 'success' \| 'warning' | 'primary' |
menuCloseIcon | React.ReactNode | `<CloseIcon />` | |
menuIcon | React.ReactNode | `<MenuIcon />` |
navigation | NavigationProps[] | | Main navigation links
onSearch | function(event: React.SyntheticEvent, value: string) => void | | Function called on search submit
searchIcon | React.ReactNode | `<SearchIcon />` | |
showUser | boolean | false | |
showSearch | boolean | false | |
title | string | | |
titleTypographyProps | TypographyProps | | |
userIcon | React.ReactNode | `<PersonIcon />` | |
userMenuNavigation | NavigationProps[] | | |

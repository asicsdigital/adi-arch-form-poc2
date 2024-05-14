import React from 'react';
import {
  Close as CloseIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import {
  AppBar,
  AppBarProps,
  Button,
  ButtonProps,
  Flex,
  FlexChild,
  GroundProps,
  Hidden,
  TextFieldProps,
  Toolbar,
  Typography,
  TypographyProps
} from '../dist';
import { merge } from 'lodash';

interface NavigationProps extends ButtonProps {
  divider?: boolean;
  href: string;
  label: string;
  listItemIconId?: string;
  listItemIcon?: React.ReactNode;
  target?: string;
}

interface OnSearchProps {
  event: React.SyntheticEvent;
  value: string;
}

export interface HeaderProps extends GroundProps {
  color?: AppBarProps['color'];
  menuCloseIcon?: React.ReactNode;
  menuIcon?: React.ReactNode;
  navigation?: NavigationProps[];
  onSearch?: OnSearchProps;
  searchIcon?: React.ReactNode;
  searchProps?: TextFieldProps;
  showUser?: boolean;
  showSearch?: boolean;
  title?: string;
  titleTypographyProps?: TypographyProps;
  userIcon?: React.ReactNode;
  userMenuNavigation?: NavigationProps[];
}

export const HeaderDefaultProps: HeaderProps = {
  color: 'primary',
  menuCloseIcon: <CloseIcon />,
  menuIcon: <MenuIcon />,
  searchIcon: <SearchIcon />,
  showUser: false,
  showSearch: false,
  userIcon: <PersonIcon />
};

export function Header(props: HeaderProps) {
  const composedProps = merge({}, HeaderDefaultProps, props);
  const { color, className, navigation, title } = composedProps;

  return (
    <>
      <AppBar
        className={className}
        color={color}
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <FlexChild flex="1">
            <Flex alignItems="center" gap={16}>
              <FlexChild flex="1 0">
                <Flex alignItems="baseline" gap={16}>
                  <Typography color="inherit" variant="h3">
                    {title}
                  </Typography>
                  <Hidden mdDown>
                    {navigation
                      ? navigation.map((link, index) => (
                          <Button
                            color="inherit"
                            key={`nav-bar-${index}`}
                            {...link}
                          >
                            {link.label}
                          </Button>
                        ))
                      : null}
                  </Hidden>
                </Flex>
              </FlexChild>
            </Flex>
          </FlexChild>
        </Toolbar>
      </AppBar>
    </>
  );
}

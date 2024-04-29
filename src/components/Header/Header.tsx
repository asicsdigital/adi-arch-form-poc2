import React from 'react';
import {
  ChevronRight as ChevronRightIcon,
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
  Divider,
  Drawer,
  Flex,
  FlexChild,
  GroundProps,
  Hidden,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
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
  const {
    color,
    className,
    menuCloseIcon,
    menuIcon,
    navigation,
    onSearch,
    searchIcon,
    searchProps,
    showUser,
    showSearch,
    title,
    titleTypographyProps,
    userIcon,
    userMenuNavigation
  } = composedProps;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleUserMenuControlClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setUserMenuOpen(!userMenuOpen);
  };

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
              <Hidden mdUp>
                {navigation?.length ? (
                  <IconButton color="inherit" onClick={handleDrawerClick}>
                    {drawerOpen ? menuCloseIcon : menuIcon}
                  </IconButton>
                ) : null}
              </Hidden>
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
              {showSearch ? (
                <FlexChild>
                  <IconButton color="inherit">{searchIcon}</IconButton>
                </FlexChild>
              ) : null}
              {showUser ? (
                <FlexChild>
                  {userMenuNavigation ? (
                    <>
                      <IconButton
                        color="inherit"
                        onClick={handleUserMenuControlClick}
                      >
                        {userIcon}
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left'
                        }}
                        elevation={1}
                        open={userMenuOpen}
                        slotProps={{ paper: { square: true } }}
                        sx={{
                          mt: 1,
                          zIndex: (theme) => theme.zIndex.drawer
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center'
                        }}
                      >
                        {userMenuNavigation.map((link, index) => (
                          <span key={`user-menu-${index}`}>
                            {link.divider ? <Divider /> : null}
                            <ListItem disablePadding>
                              <ListItemButton
                                href={link.href}
                                target={link.target}
                              >
                                {link.listItemIconId ? (
                                  <ListItemIcon>
                                    <Icon>{link.listItemIconId}</Icon>
                                  </ListItemIcon>
                                ) : link.listItemIcon ? (
                                  <ListItemIcon>
                                    {link.listItemIcon}
                                  </ListItemIcon>
                                ) : null}
                                <ListItemText
                                  primary={link.label}
                                ></ListItemText>
                              </ListItemButton>
                            </ListItem>
                          </span>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    userIcon
                  )}
                </FlexChild>
              ) : null}
            </Flex>
          </FlexChild>
        </Toolbar>
      </AppBar>
      {navigation?.length ? (
        <Hidden mdUp>
          <Drawer open={drawerOpen} variant="temporary">
            <Toolbar />
            <Toolbar>
              <List>
                {navigation
                  ? navigation.map((link, index) => (
                      <ListItem disablePadding key={`nav-drawer-${index}`}>
                        <ListItemButton href={link.href} target={link.target}>
                          <ListItemIcon>
                            {link.listItemIconId ? (
                              <Icon>{link.listItemIconId}</Icon>
                            ) : link.listItemIcon ? (
                              link.listItemIcon
                            ) : (
                              <ChevronRightIcon />
                            )}
                          </ListItemIcon>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))
                  : null}
              </List>
            </Toolbar>
          </Drawer>
        </Hidden>
      ) : null}
    </>
  );
}

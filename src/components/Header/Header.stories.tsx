import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Markdown } from '@storybook/addon-docs';
import { AccountCircle, Logout, Settings } from '@mui/icons-material';
import Readme from './readme.md';
import { RootLayout } from '../../layouts';
import { Header as HeaderComponent } from './Header';

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  parameters: {
    docs: {
      page: () => <Markdown>{Readme.toString()}</Markdown>
    }
  },
  render: (args) => (
    <RootLayout>
      <HeaderComponent {...args} />
    </RootLayout>
  ),
  title: 'Components/Header'
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Details: Story = {
  args: {
    navigation: [
      { href: '#', label: 'Articles' },
      { href: '//www.google.com', label: 'Google', target: '_blank' }
    ],
    showSearch: true,
    showUser: true,
    userMenuNavigation: [
      { href: '#', label: 'Profile', listItemIcon: <AccountCircle /> },
      { href: '#', label: 'Settings', listItemIcon: <Settings /> },
      { divider: true, href: '#', label: 'Logout', listItemIcon: <Logout /> }
    ],
    title: 'Title'
  }
};

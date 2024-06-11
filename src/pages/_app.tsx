import type { AppProps } from 'next/app';
import { RootLayout } from '../layouts';
import { Header } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Header showSearch showUser title="Forms" />
      <Component {...pageProps} />
    </RootLayout>
  );
}

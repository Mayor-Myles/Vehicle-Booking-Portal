"use client@;

import { ChakraProvider } from '@chakra-ui/react';

import { RecoilRoot } from 'recoil';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

      <body>
        <RecoilRoot>
        <ChakraProvider>{children}</ChakraProvider>
          </RecoilRoot>
      </body>
    </html>
  );
}

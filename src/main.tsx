import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { DirectionProvider, MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DirectionProvider initialDirection='rtl'>
      <MantineProvider
        theme={{
          fontFamily: 'Amatic SC, sans-serif',
        }}
      >
        <App />
      </MantineProvider>
    </DirectionProvider>
  </StrictMode>
);

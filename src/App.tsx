import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './components/HomePage.tsx';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <HomePage />
      </ThemeProvider>
    </>
  );
};
export default App;

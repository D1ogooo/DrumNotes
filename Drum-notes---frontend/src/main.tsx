import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './Hooks/useAuth';
import { Router } from './routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ChakraProvider>
    <AuthProvider>
     <Router/>
    </AuthProvider>
  </ChakraProvider>
 </React.StrictMode>,
);
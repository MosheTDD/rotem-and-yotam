import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Welcome from './components/Welcome';
import { Flex } from '@mantine/core';
import Login from './components/Login';
import Gallery from './components/Gallery';

function App() {
  return (
    <Flex w={'100dvw'} h={'100dvh'} bg={'#FAEDCD'} px={'md'}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
}

export default App;

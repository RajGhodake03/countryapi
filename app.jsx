import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'

import  { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
        //  const [isDark,setIsdark]=useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    // <ThemeContext.Provider value={[isDark,setIsdark]}>
      <ThemeProvider>
      <Header />
      <Outlet />
     </ThemeProvider>
    // </ThemeContext.Provider>
  )
}

export default App
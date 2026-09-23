import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/app/router'
import { ThemeProvider } from '@/context/ThemeContext'
import { Preloader } from '@/components/ui/Preloader'
import { CustomCursor } from '@/components/ui/CustomCursor'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Preloader />
        <CustomCursor />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

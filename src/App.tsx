import '@/styles/App.css'
import { Header } from './components/header/header'
import { ThemeProvider } from './components/theme-provider/theme-provider'

function App() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />

    </ThemeProvider>
  )
}

export default App

import '@/styles/App.css'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Header } from './components/header/header'
import { Planos } from './components/planos/planos'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <Planos />
    </ThemeProvider>
  )
}

export default App
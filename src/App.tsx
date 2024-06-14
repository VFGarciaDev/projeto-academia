import '@/styles/App.css'
import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Header } from './components/header/header'
import { Planos } from './components/planos/planos'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      
      <Header />
      <Planos />
      <Footer />
    </ThemeProvider>
  )
}

export default App
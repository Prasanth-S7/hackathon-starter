import { BrowserRouter, Routes, Route } from "react-router"
import { ThemeProvider } from "./components/theme-provider"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import Landing from "./pages/landing"
import AuthLayout from "./pages/authLayout"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}></Route>
            <Route element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/register' Component={RegisterPage}/>
          <Route path='/tasks' element={<h1>Tasks Page</h1>}/>
          <Route path='/add-task' element={<h1>new task</h1>}/>
          <Route path='tasks/:id' element={<h1>Tasks Page</h1>}/>
          <Route path='/profile' element={<h1>profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
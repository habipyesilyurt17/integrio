import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import UniversityFilter from "./components/UniversityFilter";
import NotFound from "./components/NotFound";
import UserFilter from './components/UserFilter';
import axios from 'axios';

function App() {
  const [universities, setUniversities] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const searchUniversity = async (params) => {
    setIsLoading(true)
    const url = `http://universities.hipolabs.com/search?${params}`
    try {
      await axios.get(url).then(response => {
        setUniversities(response.data)
      })
    } catch (error) {
      console.log("error----",error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    const getUsers = async () => {
      try {
        await axios.get('https://randomuser.me/api/?results=100').then(response => {
          setUsers(response.data.results)
        }).catch(err => console.log("Error"))
      } catch (error) {
        console.log("error----",error)
      } finally {
        setIsLoading(false)
      }
    }

    getUsers()
  }, [])

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/universities" />} />
          <Route path="/universities" element={<UniversityFilter universities={universities} searchUniversity={searchUniversity} isLoading={isLoading} />} />
          <Route path='/users' element={<UserFilter users={users} isLoading={isLoading} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

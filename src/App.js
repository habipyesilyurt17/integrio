import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import UniversityFilter from "./components/UniversityFilter";
import NotFound from "./components/NotFound";
import UserFilter from './components/UserFilter';
import axios from 'axios';

function App() {
  const [universities, setUniversities] = useState([])
  const [users, setUsers] = useState([])


  // const getMovies = async () => {
  //   setLoading(true)
  //   try {
  //     await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
  //       .then((response: AxiosResponse<any>) => {
  //         setMovies(response.data.results);
  //       }).catch(error => console.log(error))
  //   } catch (error) {
  //     console.log("Hata oluştu")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const searchUniversity = async (params) => {
    const url = `http://universities.hipolabs.com/search?${params}`
    try {
      await axios.get(url).then(response => {
        setUniversities(response.data)
      })
    } catch (error) {
      console.log("error----",error)
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios.get('https://randomuser.me/api/?results=100').then(response => {
          setUsers(response.data.results)
        }).catch(err => console.log("Error"))
      } catch (error) {
        console.log("error----",error)
      }
    }

    getUsers()
  }, [])

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/universities" />} />
          <Route path="/universities" element={<UniversityFilter universities={universities} searchUniversity={searchUniversity} />} />
          <Route path='/users' element={<UserFilter users={users} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

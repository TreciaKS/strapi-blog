import './App.css';
import Cards from './components/Cards'
import NavBar from './components/Navbar'
import BlogList from './components/blogs/BlogList';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BlogList />
      <Cards />
      
    </div>
  );
}

export default App

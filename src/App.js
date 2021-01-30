//import logo from './logo.svg';
import './App.css';
//import SignIn from './views/SignIn';
import Home from './views/HomePage';
import Menu from './Components/Menu';
import Book from './Components/book';
import BookPage from './views/Book';
import AllBooks from './views/AllBooks';
import MyBooks from './views/MyBooks';
import MySwaps from './views/MySwaps';
import WishList from './views/WishList';


//import { Menu } from '@material-ui/core';

function App() {
  return (

      <>
        <Menu/>
        <MySwaps/>
      </>

    
  );
}

export default App;

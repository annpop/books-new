import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'
import TopBar from './components/TopBar'
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal'



class App extends React.Component {
  state = {
    books: [
      {title: 'Mistrz i Małgorzata ', description: "lala", id:1},
      {title: 'Lot nad kukułczym gniazdem ', description: "lnanan", id:2},
      {title: 'Bridget Jones', description: "elo elo", id:3}
    ],
    show: false
  }
  openModal = () => {
    this.setState({show: true})
  }
  closeModal = () => {
    this.setState({show: false})
  }
  
  render() {
    
    return (
      <div className="App">
        <Container>
        <h4 className='text-center'>Books</h4>
        <TopBar show={this.state.show} openModal={this.openModal}/>
        <BookList books={this.state.books}/>
        <AddBookModal show={this.state.show} closeModal={this.closeModal} />
        </Container>
      </div>
    );
  }

}

export default App;

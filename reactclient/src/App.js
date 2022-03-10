import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1><u>Welcome to Becquerel CRUD REACT-NODE-EXPRESS-MYSQL APP</u></h1>
      <div className='container Information'>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
            
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
            
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email,We'll never share your email with anyone else."/>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age"/>
            
          </div>
          <div class="form-group">
            <label for="wage">Wage</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Wage"/>
            
          </div>
          <div class="form-group  mt-2">
         {/*  <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div> */}
          <button type="submit" class="btn btn-success mr-2">Valider</button>
          <button type="reset" class="btn btn-primary">Reinitialiser</button>
          </div>
        </form>
      </div>

    </div>
    
  );
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Person from './components/Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'asd', name: 'Max', age: 28, },
        { id: 'dwad', name: 'Manu', age: 30, },
        { id: 'dfgdf', name: 'Steph', age: 22, },
      ],
      showPersons: false,
    };

    // this.switchNameHandler = this.switchNameHandler.bind(this);

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); //gets index from state.persons.
    
    const person = {
      ...this.state.persons[personIndex]
    }; // gets the person object from persons with the personIndex
    
    person.name = event.target.value; // changes person name to user input value

    const persons = [...this.state.persons]; // makes a new array with the original state persons object
    persons[personIndex] = person; // uppdates the state persons object with created object
    this.setState({persons: persons}); //sets the new state
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; // this will still change the original 
    // const persons = this.state.persons.slice(); // works same ass with the spread operator
    const persons = [...this.state.persons]; // will "save the old array". 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    !this.state.showPersons ? this.setState({showPersons: true}) : 
                              this.setState({showPersons: false});
  };

  render() {
    let persons = null;
    let btnClass = '';
   

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person key={person.id}
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      changed={(event) => this.nameChangedHandler(event, person.id)} />
            );
          })}
      </div>
      );
          btnClass = classes.Red;
  
   
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
  
    );

  }
}

export default App;
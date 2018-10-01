import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
class App extends PureComponent {
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
    console.log('[App.js] Inside constructor ' + props);

  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');

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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons persons={this.state.persons}
                         click={this.deletePersonHandler}
                         changed={this.nameChangedHandler} /> ;
    };

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit appTitle={this.props.title}
                showPersons={this.state.showPersons}
                persons={this.state.persons} 
                clicked={this.togglePersonsHandler} />
          {persons}
        </WithClass>
  
    );

  }
}

export default App;
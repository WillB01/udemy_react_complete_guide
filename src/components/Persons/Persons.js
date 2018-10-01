import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside constructor ' + props);
    
      }
    
      componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
      }

      componentWillReceiveProps(nextPros) {
          console.log(['UPDATE Persons.js Insode componentWillReceiveProps() ', nextPros]);
      }

    //   shouldComponentUpdate(nextProps, nextState) {
    //       console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //       return nextProps.persons !== this.props.persons;
    //         // return true;
    //   }

      componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
      }

      componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');

      }
    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return(
                <Person key={person.id}
                        click={() =>this.props.click(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event, person.id)} />
          
            );
          })
    };
} 

export default Persons;
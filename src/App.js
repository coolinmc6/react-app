import React from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  // custom method on our component
  update( e ) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}


export default App










/*

import React from 'react'


//#1 - Creating a component
class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>
    // return React.createElement('h1', null,'Hello Eggheads!')
    // the null is the properties
  }
}


// #2 - Stateless component -> I probably won't be making many of these
const App = () => <h1>Hello stateless</h1>

export default App;


NOTES:
 - can only return a single element so if you have two elements, they must be wrapped in 
 a parent element
*/
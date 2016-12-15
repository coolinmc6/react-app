
# README.md

[Egghead.io](https://egghead.io/courses)

[Start Using React to Build Web Applications](https://egghead.io/courses/react-fundamentals)

## Setup
- Here are some of the commands to know, most importantly are the create-react-app and npm start.
```sh
npm i create-react-app -g 		# installs react CLI
create-react-app react-app		# creates my react app directory like 'rails new [app]'
cd react-app/					
npm start						# starts dev server
```
- read the React-README, there is a ton of good stuff in there

## Lookup Later
- javascript .bind() examples

## Notes

- import react
- component declaration
- export default 'component'
- notice that the sibling elements MUST be wrapped in a parent element
```javascript
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <b>Bold</b>
      </div>
      )
  }
}

export default App;
```

- You can pass properties directly into the component:
```javascript
// index.js
<App txt="this is the prop text value"/>,

// App.js in the render()
<h1>{txt}</h1>
```

- You can also set defaults

```javascript
App.propTypes = {
  txt: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}
```
### Video 5
- To use state, I have to call the constructor() method
```javascript
constructor(){
  super();
  this.state = {
    txt: 'this is the state txt',
    cat: 0
  }
}
```

- I don't understand how his update function or what the this.update.bind(this) is doing exactly...
  - so for update( e ), we are setting txt to whatever is in the input bar which is updated EVERY time
  the value of it changes
  - The bind() method creates a new function that, when called, has its this keyword set to the 
  provided value, with a given sequence of arguments preceding any provided when the new function 
  is called. [from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)











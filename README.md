
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

- I wasn't able to get an error when NOT setting txt or cat to a value...I don't know why, right now...

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
  is called...that's from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

### Video 6
- First, we made a little component in the same file as App.js which is cool...
- The Widget component is just the input that we made before and its onChange property is props.stuff (I
changed it to props.stuff from props.update because I confused it with the update() method in App)
  - the point is, you are setting the name of 'stuff', it can be anything, I just need to appropriately 
  set its value in the App component to grab the appropriate state value I want
  - As a brief reminder, the &lt;h1&gt; is set to state.txt so every time state.txt is updated, it changes
  - state.txt is updated every time there is a change and indicated by 'onChange' in the Widget component
  - the value that state.txt is changed to is simply the value of the input field which is what the
  update() method in the App component does
- Here is a quick walk-through of the app thus far:
  1. index.html has a div#root which is the catch-all for the entire app
  2. index.js is the script tag that index.html references
  3. index.js imports the React and ReactDOM libraries AND the App component, App.js
  4. index.js uses the ReactDOM.render() method to render the <App /> component and specifying
  where that thing is being rendered too, our div#root from step #1
  5. App.js import the React library and makes the initial declaration of the component, extending
  the class React.Component
  6. A simple component could just be a render() method which holds one element, which is either
  literally one element (e.g. &lt;h1&gt;Hello World!&lt;/h1&gt;) or is a parent element (div) that can have 
  multiple children and so on
  7. For our App component, if we'd like to use state, we must create the constructor() method and
  call super()
  8. (I believe) that it's here that we initialize state (this.state = {}) where we set state equal to
  an object.  I don't know whether we need to know which keys we'll need in the future...
  9. We can use App.defaultProps = {} to set defaults...
  10. ...and App.propTypes = {} to set types and whether they are required (although this didn't work for me)
  11. We can access state within an element using curly braces {this.state.txt}; here, 'txt' is a key in the 
  object state
  12. To alter state, we must use setState({key: value}) where key is what we are trying to change (e.g. 'txt')
  and value is whatever we are changing it to...in our example thus far, we are changing it to the text of the
  input bar












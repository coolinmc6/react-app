# README

## My React Apps
[coolinmc6](https://github.com/coolinmc6)'s React Repos:

1. This repo: [React App](https://github.com/coolinmc6/react-app)

1. Facebook's React Tutorial: [Tic-Tac-Toe](https://github.com/coolinmc6/react-tic-toe)

1. Another Intro: [Hello World](https://github.com/coolinmc6/react-hello-world)

1. Udemy YouTube App: [Video Browser](https://github.com/coolinmc6/video_browser)

1. Udemy Blog App: [React Blog](https://github.com/coolinmc6/react_blog)

1. Udmey Weather App: [Weather App](https://github.com/coolinmc6/redux-middleware) -> API key not included

1. Udemy Booklist: [React-Redux](https://github.com/coolinmc6/book_list) 

1. Reactco Tutorial: [Reactco Tutorial](https://github.com/coolinmc6/reactco-tutorial) (incomplete)

1. Tutspoint Tutorial: [React Tutspoint](https://github.com/coolinmc6/react-tutspoint)

1. CM React Starter: [React Starter](https://github.com/coolinmc6/cm-react-starter) (probably don't need)

1. Redux Tutorial: [Egghead.io Redux Tutorial](https://github.com/coolinmc6/redux) (incomplete)

1. Scotch.io Intro Tutorial: [Scotch Intro](https://github.com/coolinmc6/scotch-intro)

1. Scotch.io Intro CM Version: [Scotch Intro CM Version](https://github.com/coolinmc6/scotch-intro-CM)
  - same as above but more ES6 syntax, some styling, and largely on my own

1. Egghead.io's [Production Quality ToDo](https://github.com/coolinmc6/egghead-todo)

1. Colin's [Workout App](https://github.com/coolinmc6/workout-app)
  - one of my first real attempts at building an app, from the ground up, on my own
  - I did rely heavily on past projects but I tried as best as I could to 'derive' the solution rather
  than just implement it using other people's code (although there is some of that)

## Next Steps

- get notes from my completed apps:
  - what are the things that I need to know how to do for a basic React app?
  - get some notes on all the basic concepts
  - Identify the major complementary libraries I should know: Redux, React Router, Axios, etc.
  - Finish Redux Tutorial and take notes
  - Build an app using Redux, React Router, Axios
  - Do Advanced Redux course

## Links
- [Egghead.io](https://egghead.io/courses)
- Course: [Start Using React to Build Web Applications](https://egghead.io/courses/react-fundamentals)


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
- [NPM docs](https://docs.npmjs.com/cli/install) => how to install dependencies for this
repo.
  - npm i -S -D

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

### Video 7
- Look at this code:
```javascript
class App extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}
// {props.children}
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}
```

- the button is only populated with 'I &hearts; React' because of the {props.children} in the Button 
component.  If I removed that, nothing would populate.
  - Egghead: this.props.children accesses the innerHTML or nested components of another component.

### Video 8
- An error is displayed in the console if text is less than 6 characters.
```javascript
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`{propName} was too short!`)
    }
  }
}
```

### Video 9: Normalize Events with React's Synthetic Event System
- These are the events
- Walk through of onCut:
  - you select some text in the textarea element and cut
  - in the constructor(), this.update = this.update.bind(this) so this.update is
  grabbing whatever the event is
  - the event is the argument that is passed in the state is updated for currentEvent

```javascript
class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '-- no event selected --'}
    this.update = this.update.bind(this)
  }

  update(event){
    this.setState({currentEvent: event.type})
  }
  render(){
    return (
      <div>
        <textarea 
          cols="30" 
          rows="10"
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
           />
         <h1>{this.state.currentEvent}</h1>
        </div>
      )
  }
}
```
### Video 10: Use React ref to Get a Reference to Specific

- I have no idea what I was supposed to learn there...but I do need to learn more about
refs.

### Video 11: Understand the React Component Lifecycle Methods

- when our component is added to the DOM it's called mounting, removed = unmounting
- Mount and unmount

### Video 12: Manage React Component State with Lifecycle
```javascript
class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('componentWillMount');
    this.setState({m: 2})
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }
  componentDidMount(){
    console.log('componentDidMount');
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}
```

- this is after videos 11 and 12

### Video 13: Control React Component Updates when New Props
- I don't quite understand what the methods do...I can see it but I don't quite
understand why I'd use it.
  - componentWillReceiveProps(nextProps){}
  - shouldComponentUpdate(nextProps, nextState){}
  - componentDidUpdate(prevProps, prevState){}

```javascript
class App extends React.Component {
  constructor(){
    super();
    this.state = {increasing: false}
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />, document.getElementById('root')
      )
  }
  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>
      {this.props.val}
    </button>
  }
  componentDidUpdate(prevProps, prevState){
    console.log(`prevProps: ${prevProps.val}`)
  }

}
```
### Video 14: Use map to Create React Components from Arrays
- Pretty cool example...
```javascript
import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch('http://swapi.co/api/people/?=format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }

  filter(e){
    this.setState({filter: e.target.value})
  }

  render() {
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }
    return (
    <div>
      <input type="text" onChange={this.filter.bind(this)} />
      {items.map(item => 
        // <h4 key={item.name}>{item.name}</h4>)}
       <Person key={item.name }person={item} /> )}
    </div>
    );
  }

}

const Person = (props) => <h4>{props.person.name}</h4>
```

### Video 15: Compose React Component Behavior with Higher Order Components
- I think this will be important for me later...
```javascript
import React from 'react';
// import ReactDOM from 'react-dom';
  
  const HOC = (InnerComponent  ) => class extends React.Component {
    constructor(){
      super();
      this.state = {count: 0}
    }
    update(){
      this.setState({count: this.state.count + 1})
    }
    componentWillMount(){
      console.log('will mount')
    }
    render(){
      return (
        <InnerComponent 
          {...this.props}
          {...this.state}
          update={this.update.bind(this)}
        />
      )
    }
  }

class App extends React.Component {

  render() {    
    return (
    <div>
      <Button>button</Button>
      <hr />
      <LabelHOC>label</LabelHOC>
    </div>
    )
  }

}

const Button = HOC((props) => 
  <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
  componentWillMount(){
    console.log('Label will mount')
  }
  render(){
    return (
        <label onMouseMove={this.props.update}>
          {this.props.children} - {this.props.count}
        </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default App
```

### Video 16: Build a JSX Live Compiler as a React Component
- pretty neat little exercise that I will probably not ever need but it'd probably be good 
to do at least once

### Video 17: Understand JSX at a Deeper Level
- this video we play with the live compiler that we created in the last video
- I should go through this again

### Video 18: Understand React.Children Utilities
- 
- 

### Video 19: Use React.cloneElement to Extend Functionality of

### Video 20: Write More Reusable React Components with Composable

### Video 21: Debug React Components with Developer Tools in Chrome
- 





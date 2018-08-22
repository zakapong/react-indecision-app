class Counter extends React.Component {
    constructor(props){
        super (props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
        count: 0
        };
    }
   


    componentDidMount() {
        try {
          const json = localStorage.getItem('count');
         // const countStart = JSON.parse(json);
          const count = parseInt(json, 10);

          console.log(count)
    
          if (!isNaN(count)) {
            this.setState(() => ({ count }));
          }
        } catch (e) {
          // Do nothing at all
        }
      }
  
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
        //  const json = JSON.stringify(this.state.count);
          localStorage.setItem('count', this.state.count);
       }
      }

    
    handleAddOne(){
        this.setState ((prevState)=>{
        return {
            count: prevState.count + 1
        }
        });
        
    } 

     handleMinusOne(){
        this.setState ((prevState)=>{
            return {
                count: prevState.count - 1
            }
            });
        
    } 

     handleReset(){
        this.setState (()=>{
            return {
                count: 0
            }
            });
        
    } 

    render(){
        return(
        <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }
}



ReactDOM.render(<Counter/>, document.getElementById('app'));

// challenge
/*
let count = 0;
 
  const addOne = () =>{
    count++;
    renderCounterApp();
}  

  const minusOne = () =>{
    count--;
    renderCounterApp();
}  

const reset = () =>{
    count = 0;
    renderCounterApp();
} 
 
const appRoot = document.getElementById('app');

const renderCounterApp = () =>{
    const templateThree= (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
       );
       
       ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();

*/

/*
const template =(
<div>
    <h1>Zakaria Mahmud</h1>
    <p>This is some info!</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
</div>);

//const appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);


const user = {
    name: 'Zakaria Mahmud',
    age: 31,
    location: 'Malmöa'
}

function getLocation(location){
if(location){
    return <p>Location: {location}</p>
}
}

const template2 =(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 25) &&  <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>);

// const appRoot2 = document.getElementById('app');

// ReactDOM.render(template2, appRoot2);

*/
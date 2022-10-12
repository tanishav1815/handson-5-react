import React, {PureComponent} from 'react'

class UseState1 extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = { 
        count:0
     }
    render() { 
        return ( 
            <>
            <h1>Pure-component</h1>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count +1 })}} className='btn-in'> Increment + </button>

            <button onClick={()=>{this.setState({count:this.state.count -1})}}className='btn-dec'>Decrement - </button>

            <p> A <b>Pure Component</b> is a component that performs a check on the value of React props before deciding whether to <b>re-render</b> the component or not.</p>

            <hr />

            </>


         );
    }
}
 
export default UseState1;
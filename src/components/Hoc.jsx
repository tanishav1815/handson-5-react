import React, {useRef, useState} from 'react'



export const Hoc = (props) => {

  return (
    <div className="one">
        <h1>HOC</h1>
        <HOCRed cmp= {Counter}/>
        <HOCGreen cmp= {Counter}/>
        <p className='p2'>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</p>

    </div>
  )
}

function HOCRed(props)
{
    return (
        <h2 style={{backgroundColor:'red', width:100}} className='hoc1'>RED <props.cmp/></h2>
    )
}

function HOCGreen(props)
{
    return (
        <h2 style={{backgroundColor:'green', width:100}}className='hoc2'>Green <props.cmp/></h2>
    )
}



function Counter(){
    const[count, setCount]=useState(0)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>UPDATE</button>
        </div>
    )
}


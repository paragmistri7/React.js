import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mainexample = () => {
  return (
    <>
       <h2 className='text-center'>Example component</h2>
         
        <div className="row text-center fs-4 bg-warning ">
              <div className="col-md-4">
                   <Link to ="examplecom">Example component</Link>
              </div>
              <div className="col-md-4">
                   <Link to ="classcom">Class component</Link>
              </div>
              <div className="col-md-4">
                   <Link to ="functioncom">Function component</Link>
              </div>
        </div>
           
                       
        <Outlet></Outlet>
    </>
  )
}

export default Mainexample

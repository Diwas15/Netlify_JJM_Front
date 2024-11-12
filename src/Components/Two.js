import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../Contexts/myContext';

function Two() {

    const context = useContext(myContext);
    const [data, setData] = useState({});

    useEffect(()=>{
      setData(context.scheme.Scheme_Details);
    },[context.scheme]);

  return (
    <div className={`${context.clicked=="two"?'show':''} container`}>
      <p>Implementing Agency details of the scheme are enlisted here</p>
      <h3>About Scheme</h3>
      {data &&
        Object.keys(data).map((key)=>{
          return <>
          <div className="element">
            <dt className='key'>{key}</dt>
            <dd className='value'>{data[key]==''?'N/A':data[key]}</dd>
          </div>
          <hr className='rule'/>
          </>
        })
      }
      
      {/* <div className="element">
        <dt className='key'>No. of FHTC</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Total Cost</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>State Share</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Center Share</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Handed Over ON (Date)</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Work order date</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Cost of work order</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Completion Date of Scheme</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Final Cost of Scheme</dt>
        <dd className='value'>SURSURI PT-II PWSS</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Contracter Name <p>Address</p></dt>
        <dd className='value'>Sanjay Kumar <p>BASIL PARA, CHURCHURI, CHURCHURI DAS SUPA, HAZARIKA PARA, SEKHA PARA</p></dd>
      </div> */}
    </div>
  )
}

export default Two

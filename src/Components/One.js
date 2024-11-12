import React, { useContext, useEffect, useState } from 'react'
import '../Styles/One.css'
import { myContext } from '../Contexts/myContext';


function One() {

    const context = useContext(myContext);
    const [data, setData] = useState({});
    
    useEffect(()=>{
      setData(context.scheme.Basic_Details);
    },[context.scheme])


    
  
    // console.log(data);
    // for(const key in data.BasicDetails.AboutThisScheme){
    //   console.log(`${key} : ${data.BasicDetails.AboutThisScheme[key]}`)
    // }
 
  return (
    
    <div className={`${context.clicked=="one"?'show':''} container`}>
      <p>Basic details of the scheme are enlisted here, for further information please contact concerned officer of division / sub division</p>
      <h3>About This Scheme</h3>
      {data &&
        Object.keys(data).map((key)=>{
          return <><div className="element">
            <dt className='key'>{key}</dt>
            <dd className='value'>{data[key]==''?'N/A':data[key]} </dd>
          </div>
          <hr className='rule'/>
          </>
          
        })
      }
      
{/*       
      <div className="element">
        <dt className='key'>Scheme ID</dt>
        <dd className='value'>30011520</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Divison</dt>
        <dd className='value'>Belsor Division</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>District</dt>
        <dd className='value'>Nalbari</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Block</dt>
        <dd className='value'>PACHIM NALBARI</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Panchayat</dt>
        <dd className='value'>28 NO BARNADDI</dd>
      </div>
      <hr className='rule'/>
      <div className="element">
        <dt className='key'>Habitation</dt>
        <dd className='value'>BASIL PARA, CHURCHURI, CHURCHURI DAS SUPA, HAZARIKA PARA, SEKHA PARA</dd>
      </div> */}
    </div>
  )
}

// function Element(){
//     return(
//       <div className="element">
//         <dt className='key'>Name</dt>
//         <dd className='value'>Hola</dd>
//       </div>
//     );
// }
export default One

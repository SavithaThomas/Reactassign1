import React from 'react';
import './Card.css';
import {useState} from 'react';


export default function Card() {
  const [isActive, setIsActive] = useState(false);
  const [isCard2, setIsCard2] = useState(false);

  const handleClickcard1 = () => {  
    setIsCard2(current => !current);    
     };
  const handleClickcard2 = () => {
    setIsActive(current => !current);
    };

  return (
    <div className='Cards'>
      <div className='Card1'      
        style={{
            backgroundColor: isCard2 ? 'orange' : 'salmon',
        }}
        onClick={handleClickcard2}
      > Card1    
      </div>
      <div className='Card2'
        style={{
          backgroundColor: isActive ? 'lightblue' : 'grey',
        }}
        onClick={handleClickcard1}
      > Card2       
      </div>
    </div>
  );
}

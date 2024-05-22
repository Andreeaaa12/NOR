import React from 'react';
import Electro1 from '../Landing Page Assets/electro1-eva.png';
import Electro2 from '../Landing Page Assets/electro2-eva.png';
import Electro3 from '../Landing Page Assets/electro3-eva.png';

const PCB = () => {
    const PCBInfoData=[
        {
            image:Electro1
        },
        {
            image:Electro2
        },
        {
            image:Electro3
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <h1 className='nor-primary-heading-gradient'>Electronics</h1>
        </div>
        <div className='work-section-bottom'>
            {
                PCBInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='nor-info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                    </div>
                )
                )
            }
        </div>

    </div>
  )
}

export default PCB;
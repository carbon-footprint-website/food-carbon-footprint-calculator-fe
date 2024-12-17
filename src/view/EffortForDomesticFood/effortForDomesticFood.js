import React from 'react';
import Button from 'component/Button/button';
import { useNavigate } from 'react-router-dom';
import homeIcon from 'assets/icon/home-icon-navy.png';
import EffortImg2 from 'assets/img/effort2-img.jpg';
import RegionDropdown from 'component/RegionDropdown/regionDropdown';
import NextIcon from 'assets/icon/next-icon-navy.png';

import { useState } from 'react';

function Effort2() {

    const [carbonEmission, setCarbonEmission] = useState(0);
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/main")
    }

    const goToNextEffort = () =>{
        navigate('/seasonal-food')
    }

    const handleRegionSelect = (emission) => {
        setCarbonEmission(emission)
      };

  return (
    <div className="effortv-outer-container">
         
         <div className='effortv-content-container'>

            <div className='navigation-container'>
                <Button 
                label="홈으로"
                nextImgSrc={homeIcon}
                imgWidth={'12px'}
                width="calc((90/1280)*100vw)"
                height="calc((38/720)*100vh)"
                fontSize={'max(12px,1vw)'}
                border='dashed 0.24vw'
                borderStyle='dashed'
                borderColor='#001F3F'
                fontWeight='700'
                color='#001F3F'
                onClick={goToHomePage} />
            </div>

            <div className='effortv-main-content'>
                <div className='effortv-main-inner-content'>
                    <div className='effortv-inner-left'>
                        <div className='effortv-inner-left-content'>
                            <img src={EffortImg2} style={{ width:'41vh' ,radius:'12px'}}/>
                        </div>
                    </div>
                    <div className='effortv-inner-right'>
                        
                            <div className='effortv-box-container'>
                                <Button 
                                label={'노력 02'}
                                radius={'8px'}
                                border={'none'}
                                fontSize={'max(16px,1.2vw)'}
                                bgColor='#001F3F'
                                color='white'
                                width={'6vw'}
                                height={'5.4vh'}  
                                />
                                <div className='effortv-inner-desc'>
                                국내산 식재료를 구매하면 탄소발자국을 줄일 수 있어요 !
                                </div>
                            </div>

                            <div className='effortv-box-desc'>
                                <p >
                                    <span style={{display:'inline-block', marginRight:'1vw'}}>
                                    <RegionDropdown
                                        width='calc((180/1280)*100vw)'
                                        height='calc((50/720)*100vh)'
                                        onRegionSelect={handleRegionSelect}
                                    />
                                    </span>
                                  
                                    를 구매하면 수입을 위해 <br></br> 온실가스 배출량
                                    <Button
                                    label={carbonEmission}
                                    style={{
                                        width:'6vw',
                                        height:'5vh',
                                        display: 'inline-block',
                                        margin:'0 12px',
                                        borderRadius:'8px',
                                        color:'white',
                                        backgroundColor:'#001F3F',
                                        border :'white'
                                    }}
                                    /> gCO2eq/kg 의 온실가스를 더 배출합니다.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
            <div className='next-button-container'>
                <Button 
                label={"다음"} 
                nextImgSrc={NextIcon}
                imgWidth={'6px'}
                width={'calc((80/1280)*100vw)'} 
                height={'calc((42/720)*100vh)'} 
                fontSize={'max(12px,1vw)'} 
                fontWeight={'700'}
                color={'#001F3F'} 
                border={'solid 0.2vw'}
                onClick={goToNextEffort}
                    /> 
            </div>
        </div>
    </div>
   
  );
}

export default Effort2;

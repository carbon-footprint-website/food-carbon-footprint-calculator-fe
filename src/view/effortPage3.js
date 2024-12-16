import React from 'react';
import '../css/effortPage1.css';
import Button from '../component/button';
import { useNavigate } from 'react-router-dom';
import MainIntroImg from '../assets/img/main-intro-img.jpg'
import homeIcon from '../assets/icon/home-icon-navy.png';
import strawBerry from '../assets/img/strawberry-img.jpg'
function Effort3() {

    const navigate = useNavigate();

    const goToSelectionPage = () => {
      navigate('/select'); // '/select1' 경로로 이동
    };

    const goToHomePage = () => {
        navigate("/main")
    }


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
                fontSize={'1.2vw'}
                border='dashed 0.2vw'
                borderStyle='dashed'
                borderColor='#001F3F'
                fontWeight='600'
                color='#001F3F'
                onClick={goToHomePage} />

            </div>

            <div className='effortv-main-content'>
                <div className='effortv-main-inner-content'>
                    <div className='effortv-inner-left'>
                        <div className='effortv-inner-left-content'>
                            <img src={strawBerry} style={{ width:'41vh' ,radius:'12px'}}/>
                        </div>
                    </div>
                    <div className='effortv-inner-right'>
                        
                            <div className='effortv-box-container'>
                                <Button 
                                label={'노력 03'}
                                radius={'8px'}
                                border={'none'}
                                fontSize={'max(16px,1.2vw)'}
                                bgColor='#001F3F'
                                color='white'
                                width={'6vw'}
                                height={'5.4vh'}  
                                />
                                <div className='effortv-inner-desc'>
                                제철 식자재를 구매하면 탄소 발자국을 줄일 수 있어요 !
                                </div>
                            </div>

                     
                            <div className='effortv-box-desc'>
                                <p >
                                    딸기를 제철에 먹으면, 비닐하우스 재배로 인한 <br></br> 온실가스 배출량
                                    <Button
                                    label={7.212}
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
                                    /> tCO2eq를 줄일 수 있습니다.
                                </p>
                            </div>
                      
                        
                    </div>
                
                </div>
                
            </div>


        </div>


    </div>
   
  );
}

export default Effort3;

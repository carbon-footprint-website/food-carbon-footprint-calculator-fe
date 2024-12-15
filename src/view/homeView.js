import React from 'react';
import '../css/homeView.css';
import Button from '../component/button';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToSelectionPage = () => {
      navigate('/main'); // '/select1' 경로로 이동
    };

  return (
    <div className="home-container">
        <div className='food-main-container'>
            <div className='main-content'>
                <div className='home-text-container'>
                    식재료,
                </div>
                <div className='home-text-container'>
                    탄소발자국
                </div>
                <div className='home-text-container'>
                    줄이기
                </div>
            </div>
            <div className='home-below-container'>
                <div className='divider'>
                </div>
                
                <span className='start-btn'>
                <Button label="시작하기" width="8.4vw" height="6.4vh" fontSize={"max(18px,1.5vw)"} onClick={goToSelectionPage} />
                </span>
    

            </div>    
        </div>
   

    
      
        <span className='sub-title'>
            탄소발자국 계산기
        </span>
        
    </div>
  );
}

export default Home;

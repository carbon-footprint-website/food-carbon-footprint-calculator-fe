import React from 'react';
import '../css/frontView.css';
import Button from '../component/button';
import { useNavigate } from 'react-router-dom';
import MainIntroImg from '../assets/img/main-intro-img.jpg'
import HomeIcon from "../assets/icon/previous-icon.png"

function Main() {

    const navigate = useNavigate();

    const goToEffortPage1 = () => {
      navigate('/domestic-food'); // '/select1' 경로로 이동
    };

    const goToEffortPage2 = () => {
        navigate('/local-food'); // '/select1' 경로로 이동
      };

    const goToEffortPage3 = () => {
    navigate('/seasonal-food'); // '/select1' 경로로 이동
    };

    const goToStartPage = () => {
        navigate('/');
    }


  return (
    <div className="frontv-outer-container">
         
         <div className='frontv-main-container'>
         <div className='navigation-container'>
            <Button
            label={'뒤로가기'}
            fontSize='0.8vw'
            width='6vw'
            height='5vh'
            previousImgSrc={HomeIcon}
            imgWidth={'0.4vw'}
            onClick={goToStartPage}/>
            </div>
            <div className='frontv-main-content'>
                <div className='frontv-inner-content'>
                    <div>
                        <img src={MainIntroImg} style={{ width: '28vw', borderRadius: '10px' }}></img>
                    </div>
                    <span className='frontv-about-container'>
                        <div>
                        About
                        </div>
                        <p>
                            밥상을 차리기 위해 식재료를 구매할 때,<br></br>
                            <b style={{fontSize: '1.6vw', fontWeight: 'bold'}}>탄소발자국을 줄이기</b>  위한 노력을<br></br>
                            할 수 있다는 거, 알고 계셨나요? <br></br>
                        </p>
                    </span>
                </div>
            </div>

            <div className='home-below-container'>
                <div className='divider'>
                </div>
                <span className='effort-btn'>
                    <Button
                        label="노력 1" 
                        width="8.4vw"
                        height="6.4vh" 
                        fontSize={"1.4vw"}
                        fontWeight='700'
                        bgColor='white'
                        radius='8px' 
                        color='#19222B'
                        hoverBgColor='#19222B'
                        onClick={goToEffortPage1} />
                    </span>
                <span className='effort-btn'>
                    <Button
                        label="노력 2" 
                        width="8.4vw"
                        height="6.4vh" 
                        fontSize={"1.4vw"}
                        fontWeight='700'
                        bgColor='white'
                        radius='8px' 
                        color='#19222B'
                        hoverBgColor='red'
                        onClick={goToEffortPage2} 
                    />
                </span>
                <span className='effort-btn'>
                    <Button
                        label="노력 3" 
                        width="8.4vw"
                        height="6.4vh" 
                        fontSize={"1.4vw"}
                        fontWeight='700'
                        bgColor='white'
                        radius='8px' 
                        color='#19222B'
                        hoverBgColor='red'
                        onClick={goToEffortPage3} />
                </span>

            </div>    
        </div>

    </div>
   
  );
}

export default Main;

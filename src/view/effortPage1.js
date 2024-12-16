import React from 'react';
import '../css/effortPage1.css';
import Button from '../component/button';
import { useNavigate } from 'react-router-dom';
import MainIntroImg from '../assets/img/main-intro-img.jpg'
import homeIcon from '../assets/icon/home-icon-navy.png';
import { useEffect, useState, useRef } from 'react';
import { Map,  Polygon, CustomOverlayMap} from "react-kakao-maps-sdk";
import MapDropdown from '../component/RegionDropdown/mapDropdown';

const EmissionDataByRegion = {
    서울: {
        경기: { distance: 38, emission: 7.296 },
        강원: { distance: 103, emission: 19.776 },
        충북: { distance: 146, emission: 28.032 },
        충남: { distance: 144, emission: 27.648 },
        경북: { distance: 234, emission: 44.928 },
        경남: { distance: 368, emission: 70.656 },
        전남: { distance: 348, emission: 66.816 },
        전북: { distance: 219, emission: 42.048 },
        인천: { distance: 40, emission: 7.68 },
        부산: { distance: 409, emission: 78.528 },
        대구: { distance: 297, emission: 57.024 },
        광주: { distance: 298, emission: 57.216 },
        대전: { distance: 166, emission: 31.872 },
        울산: { distance: 382, emission: 73.344 },
        세종: { distance: 145, emission: 27.84 },
        서울: { distance : 0, emission : 0 }
    },
    경기: {
        서울: { distance: 38, emission: 7.296 },
        강원: { distance: 121, emission: 23.232 },
        충북: { distance: 102, emission: 19.584 },
        충남: { distance: 104, emission: 19.968 },
        경북: { distance: 198, emission: 38.016 },
        경남: { distance: 340, emission: 65.28 },
        전남: { distance: 319, emission: 61.248 },
        전북: { distance: 189, emission: 36.288 },
        인천: { distance: 45, emission: 8.64 },
        부산: { distance: 367, emission: 70.464 },
        대구: { distance: 261, emission: 50.112 },
        광주: { distance: 268, emission: 51.456 },
        대전: { distance: 134, emission: 25.728 },
        울산: { distance: 346, emission: 66.432 },
        세종: { distance: 116, emission: 22.272 },
        경기: { distance : 0, emission : 0 }
    },
    강원: {
        서울: { distance: 103, emission: 19.776 },
        경기: { distance: 121, emission: 23.232 },
        충북: { distance: 203, emission: 38.976 },
        충남: { distance: 226, emission: 43.392 },
        경북: { distance: 207, emission: 39.744 },
        경남: { distance: 390, emission: 74.88 },
        전남: { distance: 430, emission: 82.56 },
        전북: { distance: 300, emission: 57.6 },
        인천: { distance: 136, emission: 26.112 },
        부산: { distance: 417, emission: 80.064 },
        대구: { distance: 299, emission: 57.408 },
        광주: { distance: 379, emission: 72.768 },
        대전: { distance: 237, emission: 45.504 },
        울산: { distance: 379, emission: 72.768 },
        세종: { distance: 235, emission: 45.12 },
        강원: { distance : 0, emission : 0 }
    },
    충북: {
        서울: { distance: 146, emission: 28.032 },
        경기: { distance: 102, emission: 19.584 },
        강원: { distance: 203, emission: 38.976 },
        충남: { distance: 98, emission: 18.816 },
        경북: { distance: 132, emission: 25.344 },
        경남: { distance: 245, emission: 47.04 },
        전남: { distance: 259, emission: 49.728 },
        전북: { distance: 124, emission: 23.808 },
        인천: { distance: 158, emission: 30.336 },
        부산: { distance: 272, emission: 52.224 },
        대구: { distance: 166, emission: 31.872 },
        광주: { distance: 203, emission: 38.976 },
        대전: { distance: 40, emission: 7.68 },
        울산: { distance: 251, emission: 48.192 },
        세종: { distance: 32, emission: 6.144 },
        충북: { distance : 0, emission : 0 }
    },
    충남: {
        서울: { distance: 144, emission: 27.648 },
        경기: { distance: 104, emission: 19.968 },
        강원: { distance: 226, emission: 43.392 },
        충북: { distance: 98, emission: 18.816 },
        경북: { distance: 255, emission: 48.96 },
        경남: { distance: 318, emission: 61.056 },
        전남: { distance: 245, emission: 47.04 },
        전북: { distance: 137, emission: 26.304 },
        인천: { distance: 117, emission: 22.464 },
        부산: { distance: 345, emission: 66.24 },
        대구: { distance: 239, emission: 45.888 },
        광주: { distance: 203, emission: 38.976 },
        대전: { distance: 90, emission: 17.28 },
        울산: { distance: 346, emission: 66.432 },
        세종: { distance: 75, emission: 14.4 },
        충남: { distance : 0, emission : 0 }
    },
    경북: {
        서울: { distance: 234, emission: 44.928 },
        경기: { distance: 198, emission: 38.016 },
        강원: { distance: 207, emission: 39.744 },
        충북: { distance: 132, emission: 25.344 },
        충남: { distance: 255, emission: 48.96 },
        경남: { distance: 201, emission: 38.592 },
        전남: { distance: 367, emission: 70.464 },
        전북: { distance: 261, emission: 50.112 },
        인천: { distance: 255, emission: 48.96 },
        부산: { distance: 220, emission: 42.24 },
        대구: { distance: 106, emission: 20.352 },
        광주: { distance: 301, emission: 57.792 },
        대전: { distance: 171, emission: 32.832 },
        울산: { distance: 193, emission: 37.056 },
        세종: { distance: 171, emission: 32.832 },
        경북: { distance : 0, emission : 0 }
    },
    경남: {
        서울: { distance: 368, emission: 70.656 },
        경기: { distance: 340, emission: 65.28 },
        강원: { distance: 390, emission: 74.88 },
        충북: { distance: 245, emission: 47.04 },
        충남: { distance: 318, emission: 61.056 },
        경북: { distance: 201, emission: 38.592 },
        전남: { distance: 260, emission: 49.92 },
        전북: { distance: 216, emission: 41.472 },
        인천: { distance: 383, emission: 73.536 },
        부산: { distance: 48, emission: 9.216 },
        대구: { distance: 94, emission: 18.048 },
        광주: { distance: 223, emission: 42.816 },
        대전: { distance: 232, emission: 44.544 },
        울산: { distance: 101, emission: 19.392 },
        세종: { distance: 253, emission: 48.576 },
        경남: { distance : 0, emission : 0 }
    },
    전남: {
        서울: { distance: 348, emission: 66.816 },
        경기: { distance: 319, emission: 61.248 },
        강원: { distance: 430, emission: 82.56 },
        충북: { distance: 259, emission: 49.728 },
        충남: { distance: 245, emission: 47.04 },
        경북: { distance: 367, emission: 70.464 },
        경남: { distance: 260, emission: 49.92 },
        전북: { distance: 152, emission: 29.184 },
        인천: { distance: 354, emission: 67.968 },
        부산: { distance: 299, emission: 57.408 },
        대구: { distance: 277, emission: 53.184 },
        광주: { distance: 66, emission: 12.672 },
        대전: { distance: 228, emission: 43.776 },
        울산: { distance: 346, emission: 66.432 },
        세종: { distance: 247, emission: 47.424 },
        전남: { distance : 0, emission : 0 }
    },
    전북: {
        서울: { distance: 219, emission: 42.048 },
        경기: { distance: 189, emission: 36.288 },
        강원: { distance: 300, emission: 57.6 },
        충북: { distance: 124, emission: 23.808 },
        충남: { distance: 137, emission: 26.304 },
        경북: { distance: 261, emission: 50.112 },
        경남: { distance: 216, emission: 41.472 },
        전남: { distance: 152, emission: 29.184 },
        인천: { distance: 225, emission: 43.2 },
        부산: { distance: 257, emission: 49.344 },
        대구: { distance: 193, emission: 37.056 },
        광주: { distance: 95, emission: 18.24 },
        대전: { distance: 88, emission: 16.896 },
        울산: { distance: 303, emission: 58.176 },
        세종: { distance: 100, emission: 19.2 },
        전북: { distance : 0, emission : 0 }
    },
    인천: {
        서울: { distance: 40, emission: 7.68 },
        경기: { distance: 45, emission: 8.64 },
        강원: { distance: 136, emission: 26.112 },
        충북: { distance: 158, emission: 30.336 },
        충남: { distance: 117, emission: 22.464 },
        경북: { distance: 255, emission: 48.96 },
        경남: { distance: 383, emission: 73.536 },
        전남: { distance: 354, emission: 67.968 },
        전북: { distance: 225, emission: 43.2 },
        부산: { distance: 413, emission: 79.296 },
        대구: { distance: 302, emission: 57.984 },
        광주: { distance: 316, emission: 60.672 },
        대전: { distance: 167, emission: 32.064 },
        울산: { distance: 387, emission: 74.304 },
        세종: { distance: 153, emission: 29.376 },
        인천: { distance : 0, emission : 0 }
    },
    부산: {
        서울: { distance: 409, emission: 78.528 },
        경기: { distance: 367, emission: 70.464 },
        강원: { distance: 417, emission: 80.064 },
        충북: { distance: 272, emission: 52.224 },
        충남: { distance: 345, emission: 66.24 },
        경북: { distance: 220, emission: 42.24 },
        경남: { distance: 48, emission: 9.216 },
        전남: { distance: 299, emission: 57.408 },
        전북: { distance: 257, emission: 49.344 },
        인천: { distance: 413, emission: 79.296 },
        대구: { distance: 109, emission: 20.928 },
        광주: { distance: 261, emission: 50.112 },
        대전: { distance: 259, emission: 49.728 },
        울산: { distance: 541, emission: 103.872 },
        세종: { distance: 281, emission: 53.952 },
        부산: { distance : 0, emission : 0 }
    },
    대구: {
        서울: { distance: 297, emission: 57.024 },
        경기: { distance: 261, emission: 50.112 },
        강원: { distance: 299, emission: 57.408 },
        충북: { distance: 166, emission: 31.872 },
        충남: { distance: 239, emission: 45.888 },
        경북: { distance: 106, emission: 20.352 },
        경남: { distance: 94, emission: 18.048 },
        전남: { distance: 277, emission: 53.184 },
        전북: { distance: 193, emission: 37.056 },
        인천: { distance: 302, emission: 57.984 },
        부산: { distance: 109, emission: 20.928 },
        광주: { distance: 213, emission: 40.896 },
        대전: { distance: 154, emission: 29.568 },
        울산: { distance: 122, emission: 23.424 },
        세종: { distance: 175, emission: 33.6 },
        대구: { distance :0, emission :0 }
    },
    광주: {
        서울: { distance: 298, emission: 57.216 },
        경기: { distance: 268, emission: 51.456 },
        강원: { distance: 379, emission: 72.768 },
        충북: { distance: 203, emission: 38.976 },
        충남: { distance: 203, emission: 38.976 },
        경북: { distance: 301, emission: 57.792 },
        경남: { distance: 223, emission: 42.816 },
        전남: { distance: 66, emission: 12.672 },
        전북: { distance: 95, emission: 18.24 },
        인천: { distance: 316, emission: 60.672 },
        부산: { distance: 261, emission: 50.112 },
        대구: { distance: 213, emission: 40.896 },
        대전: { distance: 169, emission: 32.448 },
        울산: { distance: 309, emission: 59.328 },
        세종: { distance: 180, emission: 34.56 },
        광주: { distance :0, emission :0 }
    },
    대전: {
        서울: { distance: 166, emission: 31.872 },
        경기: { distance: 134, emission: 25.728 },
        강원: { distance: 237, emission: 45.504 },
        충북: { distance: 40, emission: 7.68 },
        충남: { distance: 90, emission: 17.28 },
        경북: { distance: 171, emission: 32.832 },
        경남: { distance: 232, emission: 44.544 },
        전남: { distance: 228, emission: 43.776 },
        전북: { distance: 88, emission: 16.896 },
        인천: { distance: 167, emission: 32.064 },
        부산: { distance: 259, emission: 49.728 },
        대구: { distance: 154, emission: 29.568 },
        광주: { distance: 169, emission: 32.448 },
        울산: { distance: 260, emission: 49.92 },
        세종: { distance: 27, emission: 5.184 },
        대전: { distance :0, emission :0 }
    },
    울산: {
        서울: { distance: 382, emission: 73.344 },
        경기: { distance: 346, emission: 66.432 },
        강원: { distance: 379, emission: 72.768 },
        충북: { distance: 251, emission: 48.192 },
        충남: { distance: 346, emission: 66.432 },
        경북: { distance: 193, emission: 37.056 },
        경남: { distance: 101, emission: 19.392 },
        전남: { distance: 346, emission: 66.432 },
        전북: { distance: 303, emission: 58.176 },
        인천: { distance: 387, emission: 74.304 },
        부산: { distance: 541, emission: 103.872 },
        대구: { distance: 122, emission: 23.424 },
        광주: { distance: 309, emission: 59.328 },
        대전: { distance: 260, emission: 49.92 },
        세종: { distance: 267, emission: 51.264 },
        울산: { distance :0, emission :0 }
    },
    세종: {
        서울: { distance: 145, emission: 27.84 },
        경기: { distance: 116, emission: 22.272 },
        강원: { distance: 235, emission: 45.12 },
        충북: { distance: 32, emission: 6.144 },
        충남: { distance: 75, emission: 14.4 },
        경북: { distance: 171, emission: 32.832 },
        경남: { distance: 253, emission: 48.576 },
        전남: { distance: 247, emission: 47.424 },
        전북: { distance: 100, emission: 19.2 },
        인천: { distance: 153, emission: 29.376 },
        부산: { distance: 281, emission: 53.952 },
        대구: { distance: 175, emission: 33.6 },
        광주: { distance: 180, emission: 34.56 },
        대전: { distance: 27, emission: 5.184 },
        울산: { distance: 267, emission: 51.264 },
        제주: { distance: 480, emission: 92.16 }, 
        세종: { distance :0, emission :0 }
    },
    제주: {
        서울: { distance: 450, emission: 86.4 },
        경기: { distance: 460, emission: 88.32 },
        강원: { distance: 520, emission: 99.84 },
        충북: { distance: 470, emission: 90.24 },
        충남: { distance: 480, emission: 92.16 },
        경북: { distance: 510, emission: 97.92 },
        경남: { distance: 490, emission: 94.08 },
        전남: { distance: 300, emission: 57.6 },
        전북: { distance: 420, emission: 80.64 },
        인천: { distance: 460, emission: 88.32 },
        부산: { distance: 500, emission: 96.0 },
        대구: { distance: 490, emission: 94.08 },
        광주: { distance: 320, emission: 61.44 },
        대전: { distance: 470, emission: 90.24 },
        울산: { distance: 510, emission: 97.92 },
        세종: { distance: 480, emission: 92.16 },
        제주: { distance :0, emission :0 }
    },
  };
  
function Effort1() {

    const [fromArea, setFromArea] = useState();

    const [toArea, setToArea] = useState();

    const [resultEmission, setResultEmission] = useState(0);

    const [boundaries, setBoundaries] = useState([]); // 폴리곤 경계 데이터

    const [overlays, setOverlays] = useState([]); // 오버레이 데이터

    const handleFromRegion = (from) => {
        setFromArea(from);
        if(toArea){
            setResultEmission(EmissionDataByRegion[from][toArea].emission);
        }
    };

    const handleToRegion = (to) => {
        setToArea(to);
        if(fromArea){
            setResultEmission(EmissionDataByRegion[fromArea][to].emission);
        }
    };

    // JSON 데이터 로드
    useEffect(() => {
        const fetchBoundaryData = async () => {
          try {
            const response = await fetch("/polygon/sido.json"); // JSON 파일 경로
            const data = await response.json();
    
            const formattedBoundaries = data.features.map((feature) => {
              const path = feature.geometry.coordinates[0].map(([lng, lat]) => ({
                lat,
                lng,
              }));
              return {
                name: feature.properties.SIG_KOR_NM, // 시/도 이름
                path,
                center: {
                  lat: path.reduce((sum, coord) => sum + coord.lat, 0) / path.length,
                  lng: path.reduce((sum, coord) => sum + coord.lng, 0) / path.length,
                },
              };
            });
            setBoundaries(formattedBoundaries);
          } catch (error) {
            console.error("Failed to load boundary data:", error);
          }
        };
    
        fetchBoundaryData();
      }, [fromArea,toArea,resultEmission]);

    

    const navigate = useNavigate();

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
                            <Map
                                center={{ lat: 36.5, lng: 127.5 }}
                                style={{ width: "26vw", height: "68vh" }}
                                level={13}
                                isZoomable={true} // 줌 비활성화
                                draggable={false} // 드래그 비활성화
                                scrollwheel={false} // 마우스 스크롤 비활성화
                                >
                                    {boundaries.map((boundary, index) => (
                                <React.Fragment key={index}>
                                <Polygon
                                    path={boundary.path}
                                    strokeWeight={2}
                                    strokeColor="#001F3F"
                                    strokeOpacity={0.8}
                                    fillColor={
                                        boundary.name === fromArea
                                          ? "coral" // 회색
                                          : boundary.name === toArea
                                          ? "#001F3F" 
                                          : "#ffffff" // 기본
                                      }
                                    fillOpacity={0.8}
                                />
                                {/* <CustomOverlayMap position={boundary.center}>
                                    <div
                                    style={{
                                        padding: "5px 12px",
                                        background: "white",
                                        border: "3px solid #001F3F",
                                        borderRadius: "16px",
                                        fontFamily:'Pretendard , sans-serif',
                                        color:"#001F3F"
                                    }}
                                    >
                                    {boundary.name} 
                                    </div>
                                </CustomOverlayMap> */}
                                </React.Fragment>
                            ))}

                            </Map>
                        
                        </div>
                    </div>
                    <div className='effortv-inner-right'>
                        
                        <div className='effortv-box-container'>
                            <Button 
                            label={'노력 01'}
                            radius={'8px'}
                            border={'none'}
                            fontSize={'max(16px,1.2vw)'}
                            bgColor='#001F3F'
                            color='white'
                            width={'6vw'}
                            height={'5.4vh'}  
                            />
                            <div className='effortv-inner-desc'>
                            국내산 식자재를 구매하면 탄소 발자국을 줄일 수 있어요 !
                            </div>
                        </div>

                        <div className='effortv-box-desc'>
                            <p >
                                <span style={{display:'inline-block', margin:'0 1vw'}}>
                                <MapDropdown
                                    width='calc((130/1280)*100vw)'
                                    height='calc((50/720)*100vh)'
                                    onRegionSelect={handleFromRegion}
                                />
                                </span> 에서
                                <span style={{display:'inline-block', margin:'0 1vw'}}>
                                <MapDropdown
                                    width='calc((130/1280)*100vw)'
                                    height='calc((50/720)*100vh)'
                                    onRegionSelect={handleToRegion}
                                />
                                </span>에서 자란 당근을 구매하기 위해 운송과정에서
                                <Button
                                    label={ resultEmission }
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
                                /> gCO2eq/kg 의 온실가스를  배출합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  );
}

export default Effort1;

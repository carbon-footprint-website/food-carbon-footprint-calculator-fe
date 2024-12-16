import "./regionDropdown.css"
import React from "react";
import Select from "react-select";
import { useState } from "react";

const regions = [
    { value: "seoul", label: "서울" }, //
    { value: "busan", label: "부산" },///
    { value: "daegu", label: "대구" },//
    { value: "incheon", label: "인천" },//
    { value: "gwangju", label: "광주" },//
    { value: "daejeon", label: "대전" },//
    { value: "ulsan", label: "울산" },//
    { value: "sejong", label: "세종" },
    { value: "gyeonggi", label: "경기" },//
    { value: "chungbuk", label: "충북" },//
    { value: "chungnam", label: "충남" },//
    { value: "jeonnam", label: "전남" },//
    { value: "gyeongbuk", label: "경북" },//
    { value: "gyeongnam", label: "경남" },//
    { value: "gangwon", label: "강원" },//
    { value: "jeonbuk", label: "전북" },//
    { value: "jeju", label: "제주" },
  
  ];

const MapDropdown = ({ width = "200px", height = "40px", onRegionSelect  }) => {
    
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedRegion(selectedOption.value.label); // 선택된 옵션 객체 저장
    if (onRegionSelect) {
      onRegionSelect(selectedOption.label); // 부모로 선택된 값 전달
    }
    };
  
  

    return (
    <Select className="inner-region-dropdown"
      placeholder="선택하세요"
      options={regions}
      onChange={handleChange} value={selectedRegion}
      styles={{
        control: (base) => ({
          ...base,
          width: width,
          height: height, // 드롭다운 너비
          display: "flex",
          alignItems: "center", // 세로 가운데 정렬
        }),


        placeholder: (base) => ({
          ...base,
          height:height,
          display:'flex',
          fontSize:'1vw',
          alignItems:'center',
          justifyContent:'center',
          textAlign: "center", // 가로 가운데 정렬
          overflow: "hidden", // 텍스트 넘침 방지
          whiteSpace: "nowrap", // 줄바꿈 방지
          textOverflow: "ellipsis", // 텍스트 넘칠 시 처리
          
        }),

        menu: (base) => ({
          ...base,
          width:'300px',
          maxHeight: width, // 드롭다운 높이 제한
          overflowY: "hidden",
        }),
      }}
    />
  );
};

export default MapDropdown;

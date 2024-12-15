import "./regionDropdown.css"
import React from "react";
import Select from "react-select";
import { useState } from "react";
import { flushSync } from "react-dom";


const regions = [
  { value: "china-cabbage", label: "중국산 배추", emission: "576" }, 
  { value: "philippine-banana", label: "필리핀산 바나나", emission: "3362" }, 
  { value: "usa-meat", label: "미국산 육류", emission: "9663"}, 
  { value: "australian-meat", label: "호주산 육류", emission : "7694" }, 
  { value: "norwegian-fish", label: "노르웨이산 생선류", emission : "7726"} 
];

const RegionDropdown = ({ width = "200px", height = "40px", onRegionSelect  }) => {
    
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleChange = (selectedOption) => {
        setSelectedRegion(selectedOption.value.emission); // 선택된 옵션 객체 저장
    if (onRegionSelect) {
      onRegionSelect(selectedOption.emission); // 부모로 선택된 값 전달
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

export default RegionDropdown;

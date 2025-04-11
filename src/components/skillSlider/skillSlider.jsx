import React from 'react';
import ReactBeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 50%; /* 30% smaller than 100% */
  margin: 50px auto; /* Center horizontally with auto margins */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center; /* Helps with centering the content */
`;

const DeveloperSkillsSlider = ({ frontendImage, backendImage }) => {
  // Calculate 30% smaller dimensions
  const sliderWidth = 200; // 800 × 0.7 = 560
  const sliderHeight = 100; // 400 × 0.7 = 280

  // Create images for both sides
  const beforeAfterImages = {
    firstImage: {
      imageUrl: backendImage
    },
    secondImage: {
      imageUrl: frontendImage
    }
  };

  return (
    <SliderContainer>
      <ReactBeforeAfterSlider
        {...beforeAfterImages}
        delimiterColor="#6C5CE7"
        sliderWidth={sliderWidth}
        sliderHeight={sliderHeight}
      />
    </SliderContainer>
  );
};

export default DeveloperSkillsSlider;
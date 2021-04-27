import * as React from "react";
import styled from "styled-components";

const HeroImage = styled.img`
  width: 100%;
  height: 31vw;
  display: block;
  object-fit: cover;
`;

const Image = () => {
  return (
    <HeroImage
      src="https://res.cloudinary.com/modus-create-inc/images/f_auto,q_auto:eco,w_auto/f_auto,q_auto:eco/v1614796352/mel-poole-__WG73-dRmM-unsplash-3/mel-poole-__WG73-dRmM-unsplash-3.jpg"
      alt="Discover Greatness"
    />
  );
};

export default Image;

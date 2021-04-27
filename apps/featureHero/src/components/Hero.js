import * as React from "react";
import styled from "styled-components";
import Image from "./Image";
import css from "./Hero.module.css";

import { GlobalEventBus } from "toolbelt/eventbus";

const Container = styled.section`
  position: relative;
  width: 100%;
  user-select: none;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: absolute;
  margin: 3% 4%;
  top: 0;
`;

const Button = styled.button``;
const Text = styled.span``;

const Hero = () => {
  const fireEvent = React.useCallback(() => GlobalEventBus.trigger("cta"), []);
  return (
    <Container>
      <Image />
      <ContentWrapper>
        <h1 className={css.textWhite}>
          See what's there.
          <br />
          Wee see beyond.
        </h1>
        <h2 className={css.textWhite}>#FutureIsAnAttitude</h2>
        <Button onClick={fireEvent} className={css.ctaButton}>
          Discover more
        </Button>
      </ContentWrapper>
    </Container>
  );
};

export default Hero;

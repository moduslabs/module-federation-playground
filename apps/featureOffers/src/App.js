import * as React from "react";
import styled from "styled-components";
import Offers from "./components/Offers";

import { GlobalEventBus } from "toolbelt/eventbus";

const Title = styled.div`
  margin: 1.825rem 0 1.125rem 0;
`;

GlobalEventBus.on("cta", () => {
  console.log(`
    Hero app triggered an event in the toolkit app. The Offers app registered the event as expected.
    The toolkit app is loaded in two apps, but the memory allocation remains the same.
    That allows us to access the same singleton in two separate apps.
  `);
  alert("It worked! See the console for more info...");
});

const App = () => (
  <>
    <Title>
      <h3>Offers and features</h3>
    </Title>
    <Offers />
  </>
);

export default App;

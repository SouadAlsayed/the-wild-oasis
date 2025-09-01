import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
          </Row>
          <Row type="horizontal">
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("Check in!")}>Check in</Button>
            <Button onClick={() => alert("Check out!")}>Check out</Button>
          </Row>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

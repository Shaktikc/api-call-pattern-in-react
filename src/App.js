import logo from "./logo.svg";
import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import { ContactUs } from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Container maxWidth="1552px" centerContent overflowX={"hidden"}>
      {" "}
      <ContactUs />
    </Container>
  );
}

export default App;

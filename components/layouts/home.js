import Container from "@material-ui/core/Container";
import { sizing } from "@material-ui/system";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const Home = props => {
  return (
    <Container maxWidth="md">
      <Box width="100%" height="100vh" display="flex" flexDirection="column">
        {props.children}
      </Box>

      <style jsx>{`
        :global(body) {
          background-color: #458530;
          minheight: 100vh;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </Container>
  );
};

export default Home;

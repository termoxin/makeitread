/** @jsxRuntime classic */
/** @jsx jsx  */
import { Card, Text, Image, jsx } from "theme-ui";

const nycImage =
  "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Coronavirus_Info_midtown_manhattan_skyline_nyc_3000x2000_364fa9b8-86ce-4f95-907a-4bd8ea32f232.jpg";

const List = ({ toggleTheme }) => (
  <div>
    <h1 sx={{ variant: "containers.page" }} onClick={toggleTheme}>
      List
    </h1>
    <p>
      <b>HERE'S THE SECRET KEY: </b>
      {process.env.NEXT_PUBLIC_SECRET}
    </p>
    <Card
      sx={{
        variant: "containers.card",
        maxWidth: 256,
      }}
    >
      <Image src={nycImage} />
      <Text>Card</Text>
    </Card>
  </div>
);

export default List;

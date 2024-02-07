import { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import { DisplayType } from "../home";

export default function () {
  const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies);

  return (
    <Container style={{ marginTop: "50px" }}>
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeTab === DisplayType.Movies}
          onClick={() => setActiveTab(DisplayType.Movies)}
        />
        <Menu.Item
          name="TV Shows"
          active={activeTab === DisplayType.TvShows}
          onClick={() => setActiveTab(DisplayType.TvShows)}
        />
      </Menu>
    </Container>
  );
}

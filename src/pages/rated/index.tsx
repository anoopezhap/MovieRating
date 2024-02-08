import { useState } from "react";
import { Container, Menu, Segment, Header } from "semantic-ui-react";
import { DisplayType } from "../home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvSows } from "./query";

export default function Rated() {
  const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedmovies"],
    queryFn: fetchRatedMovies,
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
    queryKey: ["ratedtvshows"],
    queryFn: fetchRatedTvSows,
  });

  console.log(ratedMovies);
  console.log(ratedTvShows);

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
      <Segment>
        {activeTab === DisplayType.Movies ? (
          <div>
            <Header as={"h2"}>Rated Movies</Header>
          </div>
        ) : (
          <div>
            <Header as={"h2"}>Rated TV Shows</Header>
          </div>
        )}
      </Segment>
    </Container>
  );
}

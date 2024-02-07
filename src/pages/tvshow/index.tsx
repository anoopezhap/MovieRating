import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchTvShowDetails } from "./query";
import {
  Grid,
  Header,
  Loader,
  Segment,
  Image,
  List,
  Label,
  Card,
  Accordion,
} from "semantic-ui-react";

export interface genre {
  id: number;
  name: string;
}
export interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  orgin_country: string;
}
export interface network {
  id: number;
  logo_path: string;
  name: string;
  orgin_country: string;
}

export interface season {
  id: number;
  air_date: string;
  episode_count: number;
  season_number: number;
}

export interface TvShow {
  id: number;
  name: string;
  poster_path: string;
  adult: boolean;
  first_air_date: string;
  genres: Array<genre>;
  homepage: string;
  popularity: number;
  production_companies: Array<productionCompany>;
  networks: Array<network>;
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: Array<season>;
}

export default function TvShow() {
  const { id } = useParams<string>();

  if (!id) {
    return <h1>Invalid Tv Show ID</h1>;
  }

  const { data, isLoading } = useQuery<TvShow, boolean>({
    queryKey: ["tvshow"],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader />;
  }

  const seasonPanels = data?.seasons.map((season: season) => ({
    key: season.id,
    title: `Season ${season.season_number}`,
    content: {
      content: (
        <Card
          style={{ height: "70px" }}
          meta={season.air_date}
          description={`${season.episode_count} Episodes`}
        />
      ),
    },
  }));

  //return <h1>Tv Shows</h1>;

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data?.name}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  size="medium"
                  centered
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Is The Movie For Adults: </List.Header>
                  {data?.adult ? "Yes" : "No"}
                </List.Item>
                <List.Item>
                  <List.Header>First Air Date :</List.Header>
                  {data?.first_air_date}
                </List.Item>
                <List.Item>
                  <List.Header>Genres :</List.Header>
                  {data?.genres.map((genre: genre) => (
                    <Label key={genre.id}> {genre.name}</Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Home Page: </List.Header>
                  {data?.homepage ? (
                    <a target="_blank" rel="noreferrer" href={data?.homepage}>
                      {data?.homepage}
                    </a>
                  ) : (
                    "NA"
                  )}
                </List.Item>
                <List.Item>
                  <List.Header>Popularity :</List.Header>
                  {data?.popularity}
                </List.Item>
                <List.Item>
                  <List.Header>Production Companies :</List.Header>
                  {data?.production_companies
                    .map((company: productionCompany) => company.name)
                    .join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Networks :</List.Header>
                  {data?.networks.map((network: network) => (
                    <Image
                      key={network.id}
                      src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                      size="small"
                      style={{ marginRight: 10 }}
                    />
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Number Of Seasons :</List.Header>
                  {data?.number_of_seasons}
                </List.Item>
                <List.Item>
                  <List.Header>Number Of Episodes :</List.Header>
                  {data?.number_of_episodes}
                </List.Item>

                <List.Item>
                  <List.Header>Seasons :</List.Header>
                  <List.Description
                    style={{ height: "200px", overflowY: "scroll" }}
                  >
                    <Accordion
                      defaultActiveIndex={0}
                      panels={seasonPanels}
                      styled
                    />
                  </List.Description>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

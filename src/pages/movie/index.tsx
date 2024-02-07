import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./query";
import {
  Grid,
  Header,
  Loader,
  Segment,
  Image,
  List,
  Label,
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

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  adult: boolean;
  budget: number;
  genres: Array<genre>;
  imdb_id: string;
  popularity: number;
  production_companies: Array<productionCompany>;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
}

export default function Movie() {
  const { id } = useParams<string>();

  if (!id) {
    return <h1>Invalid movies ID</h1>;
  }

  const { data, isLoading } = useQuery<Movie, boolean>({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  //console.log(data);

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data?.title}</Header>
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
                  <List.Header>Budget :</List.Header>
                  {data?.budget === 0 ? "Unknown" : data?.budget}
                </List.Item>
                <List.Item>
                  <List.Header>Genres :</List.Header>
                  {data?.genres.map((genre: genre) => (
                    <Label key={genre.id}> {genre.name}</Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>IMDB ID: </List.Header>
                  {data?.imdb_id}
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
                  <List.Header>Release Date :</List.Header>
                  {data?.release_date}
                </List.Item>
                <List.Item>
                  <List.Header>Revenue :</List.Header>
                  {data?.revenue === 0 ? "Unknown" : data?.revenue}
                </List.Item>
                <List.Item>
                  <List.Header>Run Time :</List.Header>
                  {data?.runtime}
                </List.Item>
                <List.Item>
                  <List.Header>Tag Line :</List.Header>
                  {data?.tagline}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

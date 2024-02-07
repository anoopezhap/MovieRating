import { Card, Grid, Form } from "semantic-ui-react";
import { DisplayType } from ".";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export default function ColumnDisplay(props: Props) {
  const { data, displayType } = props;

  const [rating, setRating] = useState<number>(0);

  const { mutate: rateMovieMutation, error } = useMutation({
    mutationKey: ["ratemovie"],
    mutationFn: ({ id, rating }) => rateMovie(id, rating),
    onSuccess: () => {
      toast.success("Succcessfullt Rated");
    },
    onError: (err) => {
      //console.log(err.response.data.status_message);
      toast.error(`Something Happend : ${err.response.data.status_message}`);
    },
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["ratetvshow"],
    mutationFn: ({ id, rating }) => rateTvShow(id, rating),
    onSuccess: () => {
      toast.success("Succcessfullt Rated");
    },
    onError: (err) => {
      toast.error(`Something Happend : ${err.response.data.status_message}`);
    },
  });

  function rate(id: number, rating: number) {
    if (displayType === DisplayType.Movies) {
      rateMovieMutation({ id, rating });
    } else {
      rateTvShowMutation({ id, rating });
    }
  }

  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${
                displayType === DisplayType.Movies ? "movie" : "tvshow"
              }/${displayData.id}`}
            >
              <Card
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name
                }
                meta={`Release Date : ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                description={displayData.overview.slice(0, 350) + "..."}
              />
            </Link>
            <Form style={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  onChange={(e) => setRating(Number(e.target.value))}
                  action={{
                    color: "violet",
                    labelPosition: "right",
                    icon: "star",
                    content: "Rate",
                    onClick: () => rate(displayData.id, rating),
                  }}
                />
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
}

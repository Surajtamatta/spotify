import React from 'react';
import { Button, Container, Logo, Text, Wrapper } from "../../Style/ConnectAppStyle";

const ConnectApp = () => {
    const handleClick = async () => {
        const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
        const api_uri = "https://accounts.spotify.com/authorize";

        const scope = [
          "user-read-private",
          "user-read-email",
          "user-library-read",
          "user-library-modify",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
          "playlist-modify-private",
          "playlist-modify-public",
          "playlist-read-private",
          "app-remote-control",
          "streaming"
        ];

        if (!client_id || !redirect_uri) {
            console.error("Client ID or Redirect URI is missing.");
            return;
        }

        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
    };

    return (
      <Container>
          <Wrapper>
              <Logo />
              <Text>Spotify</Text>
          </Wrapper>
          <Button onClick={handleClick}>Connect Spotify</Button>
      </Container>
    );
};

export default ConnectApp;

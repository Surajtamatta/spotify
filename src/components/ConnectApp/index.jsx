import React from 'react'
import {Button,Container,Logo,Text,Wrapper} from "../../Style/ConnectAppStyle"
const ConnectApp = () => {
    const handleClick = async () => {
        const client_id = "76397f08f5bf42c5a152f1c04d79a4c9";
        const redirect_uri = "https://spotify-ivory-six.vercel.app/"  || "https://spotify-surajtamattas-projects.vercel.app/";
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
          "streaming",
          //"playlist-read-collaborative"
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
      };
      return (
        <Container>
            <Wrapper>
                <Logo/>
                <Text>Spotify</Text>
            </Wrapper>
          
          <Button onClick={handleClick}>Connect Spotify</Button>
        </Container>
      );
}

export default ConnectApp

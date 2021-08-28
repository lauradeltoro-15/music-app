# Music APP

<img src="https://source.unsplash.com/9DZY0mO98xU/800x600"  alt="Work in Progress"/>

## Table of Contents

- [Description](#description)
- [How to launch](#how-to-launch)

## Description

This is an example music APP for learning purposes. It is developed using React.

In this moment, it is just a simple page using Spotify API, where you can search for tracks and see a list of cards with those tracks.

## How to launch

1. Set your spotify API Keys:

- Create an [Spotify Account](https://www.spotify.com/).
- On your [Spotify dashboard](https://developer.spotify.com/dashboard/), click **CREATE A CLIENT ID**.
- Enter **Application Name** and **Application Description** and then click **CREATE**. Your application is registered, and the app view opens.
- On the app view, click **Edit Settings** to view and update your app settings.
- Find your **Client ID** and **Client Secret**.

2. Set your `.env` variables.

- Create a `.env` file with the following content:

```
REACT_APP_SPOTIFY_CLIENT_ID = {your_client_id}
REACT_APP_SPOTIFY_CLIENT_SECRET = {your_client_secret}
```

3. Install dependencies `npm i`.

4. Launch the application with `npm start`

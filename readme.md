# toggl-compile

**toggl-compile** is a simple nodejs tool to automatically generate time entries on Toggl. It can be used in 2 different ways:
- **Append mode**, by recording from the last recorded activity.
- **Picky mode**, by compiling not-filled selected past (and future) holes.

## Getting started

### Setup
To setup toggl-compile you have to run the following command:
```
npm run config
```

The command will ask you some useful informations like working days, working hours intervals and so on. It will also ask you to provide **toggl** token and workspace and **google** api to retrieve national holidays from google calendar api. The last two informations are optional: if not set, holidays wont be skipped.

#### Obtain toggl token

* Go to toggl profile [page](https://toggl.com/app/profile) and scroll down until the end

#### Obtain toggl workspace

* Go to projects [page](https://toggl.com/app/projects/)
* Select the workspace
* The url contains the workspace id: `https://toggl.com/app/projects/<WORKSPACE_ID>/list`

#### Obtain google token

* Create API app in google developer account [page](https://console.developers.google.com)
* Create an API Key from the `Credentials` tab

#### Set google locale

* Go in this [page](https://gist.github.com/danielefongo/0bce52012cde8f714cfb7ec1e677c7bd) and search for the locale you want to use

### Run

#### Append mode
To run the tool in append mode just execute the following command:
```
npm run append
```

#### Picky mode
To run the tool in random mode just execute the following command:
```
npm run picky
```
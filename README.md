# Liner Notes


## Description
Liner Notes is a database and note-taking app for artists to keep track of their song credits and associated albums. Users create accounts to log their artistic work, leave notes for specific songs, and add, edit, or delete any album metadata the song might appear on.

A video walkthrough of the application running can be found [here](https://youtu.be/W5fqM41CFrk).

A deployed version can be found [here](https://liner-notes-app.onrender.com)


## Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql


## Setup
To get started in development mode, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on [http://localhost:4000](http://localhost:4000)

Then, run the migrations and seed file:
```sh
rails db:migrate db:seed
```



## Acknowledgement
This application was created using Create React App.



<!-- Font Used: Google Fonts; -->


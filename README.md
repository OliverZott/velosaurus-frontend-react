# Velosaurus Frontend

- Backend: **ASP.Net Core**
- Frontend: **React**
- Database: **MongoDB**
- Repo & Pipelines: **Github**
- Hosting: **Heroku** amd **Azure**
  - <https://portal.azure.com/>
  - <https://dashboard.heroku.com/>
- DevOps: **Azure DevOps**
  - <https://dev.azure.com/>

![Project Structure](velosaurus_architecture.jpg)

## Run & Debug App locally

- `npm install` first time after cloning
- `npm start`
- `Ctrl + Shift * P` -> **Toggle Auto Attach Smart**
- `F5` - *Launch Edge against Localhost*

## Run docker container

- `docker build --tag '<image-tag>' .`
- `docker run -p 3000:3000 <image-tag> npm start`
OR
- `docker compose up`
- `docker compose down`
- `docker compose build` rebuild image, if changes in code

Resources:

- API: <https://portal.azure.com/>
  - <https://velosaurus-api.azurewebsites.net/api/tour>
- DB: <https://cloud.mongodb.com/>

## Project Setup

- `npx create-react-app velosaurus-frontend --template typescript`
- `npm i react-router-dom @types/react-router-dom`
- `npm i axios @types/axios`

Update Dependecies:

- `npm update`
- `npm audit --fix`
- `npm install <package>@latest`
- Reactupdate: `npm install react react-dom @types/react @types/react-dom`

## Next steps

- Parse distance / DateTime ...
- Logging & Exception Handling
  - <https://docs.datalust.co/docs/using-nodejs>
- POST example
- resolve enum

### Architecture

- how map repsonse object (DTO?)
- DEPLOY

### Done

- bootstrap for tour exmaple page

## npm Commands

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

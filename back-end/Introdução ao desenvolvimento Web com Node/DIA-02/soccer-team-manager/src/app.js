// src/app.js
const OK = 200;
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;

const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!!!' }));

app.use(apiCredentials); 

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', existingId, (req, res) => {
  
  const { researchedTeam } = req;
  res.status(200).json({ researchedTeam });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  console.log(teams);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));  

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});


module.exports = app;
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

const existingId = (req, res, next) => {
  const { id } = req.params;
  const researchedTeam = teams.find((team) => team.id === Number(id));
  if (!researchedTeam) {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  } else {
    req.researchedTeam = researchedTeam;
    next(); // Chama o próximo middleware
  }
};

module.exports = existingId;
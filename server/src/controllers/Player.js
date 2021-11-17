const { Player } = require("../db");
const { Op } = require("sequelize");

const createPlayers = async (req, res) => {
  const { players } = req.body;

  try {
    players.forEach(
      async (player) =>
        await Player.create({
          nickname: player.nickname.toLowerCase(),
          status: player.status,
          ranking: player.ranking,
          avatar: player.avatar,
        })
    );

    res.status(200).send("Players successfuly created.");
  } catch (err) {
    res.status(404).send(err);
  }
};

const createOnePlayer = async (req, res) => {
  const { nickname, status, ranking, avatar } = req.body;

  try {
    const player = await Player.create({
      nickname: nickname.toLowerCase(),
      status,
      ranking,
      avatar,
    });

    res.status(200).send(player);
  } catch (err) {
    res.status(404).send(err);
  }
};

const updatePlayer = async (req, res) => {
  const { id, nickname, status, ranking, avatar } = req.body;

  try {
    await Player.update(
      {
        nickname: nickname.toLowerCase(),
        status,
        ranking,
        avatar,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).send("Player successfuly updated.");
  } catch (err) {
    res.status(400).send(err);
  }
};

const deletePlayer = async (req, res) => {
  const { id } = req.body;

  try {
    await Player.destroy({
      where: { id },
    });

    res.status(200).send("Player successfuly deleted.");
  } catch (err) {
    res.status(400).send(err);
  }
};



const getPlayers = async (req, res) => {

  const { nickname } = req.query;

  try {

    if (!nickname) {

      const allPlayers = await Player.findAll();

      res.status(200).send(allPlayers);

    } else {
      const player = await Player.findOne({
        where: {
          nickname: nickname.toLowerCase(),
        },
      });

      if (player) res.status(200).send(player);

      else {
        const matchedPlayers = await Player.findAll({
          where: {
            nickname: {

              [Op.iLike]: `%${nickname}%`,

            },
          },
          order: [
            ['ranking', 'ASC']
          ]
        });

          matchedPlayers.length
          ? res.status(200).send(matchedPlayers)
          : res.status(404).json({ error: "Player not found" });
      }
    }
  } catch (err) {
    res.status(404).send(err);
  }
};


const getPlayerById = async (req, res) => {

  const { id } = req.params;

  try {

    const player = await Player.findByPk(parseInt(id));

    player ? res.status(200).send(player) : res.status(404).send('Player not found.')

  } catch (err) {
    res.status(404).send(err)
  }

}


const getTopTen = async (req, res) => {

  try {

    const topTen = await Player.findAll({
      order: [
        ['ranking', 'ASC']
      ],
      limit: 10
    });

    res.status(200).send(topTen);

  } catch (err) {
    res.status(404).send(err)
  }

}


module.exports = {

  createPlayers,
  createOnePlayer,
  updatePlayer,
  deletePlayer,
  getPlayers,
  getPlayerById,
  getTopTen

};

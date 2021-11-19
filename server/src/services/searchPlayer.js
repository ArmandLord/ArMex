const {Player}= require('../db');
const { Op } = require("sequelize");


async function playerById(id){
    try{
        return await  Player.findByPk(parseInt(id))
    }
    catch(error){
        console.log(error)
        throw error 
    }
};
async function playersByStatus(status,limit,offset){
    try{
        return await Player.findAll({
            where :{
                status: status
            },
            limit,
            offset,
            order: [["ranking", "ASC"]]
        })
    }
    catch(error){
        console.log(error)
        throw error 
    }
};

async function playersByNickname(nickname,limit,offset){
    try{
        return await Player.findAll({
            where:{
             nickname: {
               [Op.iLike]: `%${nickname}%`,
             },
             },
             limit,
             offset,
             order: [["ranking", "ASC"]]
           })
    }
    catch(error){
    console.log(error)
    throw error
    }
};




module.exports = {playerById,playersByStatus,playersByNickname}
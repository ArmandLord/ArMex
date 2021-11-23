const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const {Player,conn} = require('../db');



describe('test endpoint updatePlayer',()=>{
    beforeEach(async ()=>{
        await Object.values(conn.models).map(function(model) {
            return model.destroy({ truncate: { cascade: true } });
        }); 
    });

    afterEach(async ()=>{
        await Object.values(conn.models).map(function(model) {
            return model.destroy({ truncate: { cascade: true } });
        });
    });


    it('updatePLayer debe retornar un player actualizado', async()  => {
        // Sends GET Request to /test endpoint

        await Player.create({
            nickname: "icardi",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
        const players = await Player.findOne({where:{nickname:"icardi"}})
        const res = await request.put('/player').send({id:players.dataValues.id,nickname:"messi",status:"plata",ranking:2,avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png"})
        const playerByNickname = await Player.findOne({where:{nickname:"messi"}})
        //creo un player y despues lo busca en la base de datos y espera que el unico player existente sea el creado
        
        expect(playerByNickname.dataValues.nickname).toEqual("messi");
        expect(playerByNickname.dataValues.status).toEqual("plata");
    });
});
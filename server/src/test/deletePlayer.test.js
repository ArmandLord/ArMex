const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const {Player,conn} = require('../db');


describe('test endpoint createOnePlayer',()=>{
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


    it('deletePlayer debe eliminar un player de la base de datos', async()  => {
        // Sends GET Request to /test endpoint
        await Player.create({
            id:1,
            nickname: "jhj",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
        const res = await request.delete('/player/1');
        const player = await Player.findByPk(1);
        console.log(player)
        //creo un player y despues lo busca en la base de datos y espera que el unico player existente sea el creado
        
        expect(player).toEqual(null);
    });
});

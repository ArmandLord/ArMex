const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const {Player,conn} = require('../db');

describe('test endpoint getTopTen',()=>{
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


    it('Get players debe retornar todos los jugadores de la base de datos', async()  => {
        await Player.create({
            id: 2,
            nickname: "diosquez",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 3,
            nickname: "denis",
            status: "oro",
            ranking : 3,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 4,
            nickname: "goumaz",
            status: "oro",
            ranking : 1,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
    
    // Sends GET Request to /test endpoint
    const res = await request.get('/topTen');
    expect(res.body.players[0].id).toEqual(4);
    expect(res.body.players[0].nickname).toEqual("goumaz");
    expect(res.body.players[1].id).toEqual(2);
    expect(res.body.players[1].nickname).toEqual("diosquez");
    expect(res.body.players[2].id).toEqual(3);
    expect(res.body.players[2].nickname).toEqual("denis");
});
});
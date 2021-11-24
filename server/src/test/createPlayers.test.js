const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const { Player, conn } = require('../db');


describe('test endpoint createPlayers', ()=>{
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


    it('createPlayers debe poder crear players de forma masiva', async () => {
        // Sends GET Request to /test endpoint
        const res = await request.post('/player')
        console.log(res.status)
        const players = await Player.count();
        console.log("ACCAAAAAAAAAAAAAAAAAAA",players)
        //creo un player y despues lo busca en la base de datos y espera que el unico player existente sea el creado
        
        expect(players).toEqual(3000);
    });
});
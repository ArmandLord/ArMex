const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const { Player} = require('../../db');
const helperTest = require('../helperTest/helperTest');



describe('test endpoint createPlayers', ()=>{

    beforeEach(async ()=>{
        const truncate =  await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate =  await helperTest.truncateDataBase();
    });


    it('createPlayers debe poder crear players de forma masiva', async () => {
        // Sends GET Request to /test endpoint
        
        const res = await request.post('/player').send({cantidad : 50})
        //console.log("POOOOOOOOOOOSTPlayer",res.status)
        const players = await Player.count();
        //console.log("ACCAAAAAAAAAAAAAAAAAAA",players)
        
        expect(players).toEqual(50);
    
    });
});
const { Player, conn } = require('../../src/db.js');

describe('Player model testing', () => {
  
   before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    })); 
  
    describe('Player model', function () {
      beforeEach(async function() {
        await Country.sync({ force: true });
      });
    });
    
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('player', () => {

      it('should throw an error if nickname is null', (done) => {
        Player.create({
          status: 'oro',
          ranking: 5,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires a nickname')))
        .catch(() => done());
      });

      it('should throw an error if status is null', (done) => {
        Player.create({
          nickname: 'Guido10',
          ranking: 2,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires an status')))
        .catch(() => done());
      });

      it('should throw an error if status is not valid', (done) => {
        Player.create({
          nickname: 'Guido10',
          status: 'cobre',
          ranking: 2,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires a valid status')))
        .catch(() => done());
      });

      it('should throw an error if ranking is null', (done) => {
        Player.create({
          nickname: 'Brazil20',
          status: 'plata',
          avatar: 'avatar.jpg',

        })
        .then(() => done(new Error('It requires a ranking')))
        .catch(() => done());
      });

      it('should throw an error if ranking is not valid', (done) => {
        Player.create({
          nickname: 'Brazil20',
          status: 'plata',
          ranking: 'uno',
          avatar: 'avatar.jpg',

        })
        .then(() => done(new Error('It requires a valid ranking')))
        .catch(() => done());
      });

      it('should work when it recibes all the necessary fields', () => {
        Player.create({ nickname: 'ArmanDios1',
                         status: 'bronce', 
                         ranking: 10,
                         avatar: 'avatar.png' })
        .then(() => done(new Error('It requires all the "allownull false" fields')))
        .catch(() => done());
      });

      it('should not work when it does not recibe all the necessary fields', function(done) {
         Player.create({
         nickname: 'Vidal1000',
        })
        .then(() => done('All the field must be "allownull false"'))
        .catch(() => done());
     });
    });
  });
});
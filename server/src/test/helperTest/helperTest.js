const { conn } = require('../../db.js');


const truncateDataBase = async () => {
    await Object.values(conn.models).map(function(model) {
        return model.destroy({ truncate: { cascade: true } });
    }); 
};


module.exports = {truncateDataBase}
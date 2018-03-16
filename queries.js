const database = require("./database-connection");

module.exports = {
    list(){
        return database('coffees')
            .select()
    },
    read(id){
        return database('coffees')
            .select()
            .where('id', id)
            .first()


    },
    create(resolution){
        return database('coffees')
            .insert(resolution)
            .returning('*')
            .then(record => record[0])


    },
    update(id, resolution){
        return database('coffees')
            .update(resolution)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id){
        return database('coffees')
            .delete()
            .where('id', id)
    }

}

const mysqlDb = require("../database/mysql/connectMysql");

const getAllUsers = async (req, res) => {
     const getAllUsers = `SELECT * FROM crud.users`;
     mysqlDb.query(getAllUsers, (err, data)=> {
        if(err) res.json(err);
        if(data) res.json(data);
     });
};

const createUser = async (req, res) => {
     const createUser = "INSERT INTO users (`username`, `email`, `job`, `profile_image`) values (?)";
     const values = [
        req.body.username,
        req.body.email,
        req.body.job,
        req.body.profile_image,
     ];
     mysqlDb.query(createUser, [values], (err,data)=> {
         if(err) res.json(err);
         if(data) res.json(data);
     })
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updateUser = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [
        req.body.username,
        req.body.email,
        req.body.job,
        req.body.profile_image,
    ];
    db.query(updateUser, [...values, userId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deleteUser = "DELETE FROM users WHERE id = ?"
    mysqlDb.query(deleteUser, [userId], (err,data)=> {
        if(err) res.json(err);
        if(data) res.json("Delete operation is successful.");
    });
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}
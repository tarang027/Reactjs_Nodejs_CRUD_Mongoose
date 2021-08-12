const userRoutes = require('express').Router();
const User = require('./user.model')


userRoutes.get('/api/user/getAll', async (req, res) => {
    try {
        let data = await User.find();
        return (data && data.length > 0 ? res.send({ status: true, data }) : res.send({ status: false, message: 'No data found' }))
    }
    catch (e) {
        console.log(e)
        res.send({ status: false, message: 'Something went wrong.' })
    }
});

userRoutes.post('/api/user/addEditUser', async (req, res) => {
    try {
        let { actionType, _id, UserName, Bio, DateOfBirth, Hobbies, Role, ProfilePic } = req.body;

        if (actionType === 'edit') {

            User.findById(_id, (err, user) => {

                if (!user) {
                    res.send({ status: false, message: 'No User Found' })
                }
                else {

                    user.UserName = req.body.UserName;
                    user.Bio = req.body.Bio;
                    user.DateOfBirth = req.body.DateOfBirth;
                    user.Hobbies = req.body.Hobbies;
                    user.Role = req.body.Role;
                    user.ProfilePic = req.body.ProfilePic;

                    user.save().then(user => {
                        res.send({ status: true, message: 'User updated successfully' })
                    })
                        .catch(err => {
                            console.log("err  ", err)
                            res.send({ status: false, message: 'Something went wrong.' })
                        });
                }
            });

        }
        else {

            let user = new User({ UserName, Bio, DateOfBirth, Hobbies, Role, ProfilePic });
            user.save()
                .then(user => {
                    res.send({ status: true, message: 'User inserted successfully' });
                })
                .catch(err => {
                    res.send({ status: false, message: 'Something went wrong.' });
                });

        }
    }
    catch (e) {
        console.log(e)
        res.send({ status: false, message: 'Something went wrong.' })
    }
})

userRoutes.post('/api/user/deleteUser', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body._id });
        res.send({ status: true, message: 'User deleted successfully' })
    }
    catch (e) {
        console.log(e)
        res.send({ status: false, message: 'Something went wrong.' })
    }
})

module.exports = userRoutes;
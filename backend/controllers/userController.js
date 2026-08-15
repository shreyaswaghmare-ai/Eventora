const User =  require("../models/User");

const registerUser = async (req, res) => {
    try{
        const { name, email, password, role } = req.body;
        
        const existingUser = await User.findOne({email});

        if (existingUser) {
            return res.status(400).json ({
                message: "Email already registered"
            });
        }

        const user = await User.create ({
            name,
            email, 
            password,
            role 
        });

    res.status (201).json ({
        message : "Registration Successful",
        user
    });
}
   catch (error) {
    res.status(500).json ({
        message: error.message
    });

   }
     
};


const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {
            return res.status(400).json ({
                message: "Invalid email or Password"
            });

        }

        res.json({
            message:"Login successful",
            user
        });
    }

    catch (error) {
        res.status(500).json({
            message : error.message
        });
     }

};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: "Users not found",
      error: error.message
    });
  }
};


const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User updated successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



module.exports = { 
    registerUser,
    loginUser,
    getUsers,
    updateUser,
    deleteUser

}

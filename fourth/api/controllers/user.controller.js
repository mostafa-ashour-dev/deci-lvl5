import User from "../models/user.model.js";



const createUser = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }

        const existingUser = await User.findOne({ name: name.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const user = await User.create({
            name: name,
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to create user", message: err.message });
    }
}

const getUsers = async (_req, res) => {
    try {
        const users = await User.find().lean();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
}


export { createUser, getUsers };
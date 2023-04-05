import db from "../config/db.js";
import md5 from "md5";

export const register = async(req,res) => {
    const {firstName,lastName,email,username,password} = req.body;

    try {
        const row = await db("users")
        .select("email")
        .where("email",email);

        if (row.length > 0) {
            return res.status(400).json({errorMsg: "Email already exists"});
        };

        const hashedPass = md5(password);

        await db("users")
        .insert({
            first_name: firstName,
            last_name: lastName,
            email,
            username,
            password: hashedPass
        });

        res.sendStatus(200);
    } catch (err) {
        return res.status(400).json({errorMsg: "Username already exists"});
    };
};

export const login = async(req,res) => {
    const {usernameEmail, password} = req.body;
    try {
        const row = await db("users")
        .select("username", "password")
        .where("username", usernameEmail)
        .orWhere("email", usernameEmail);

        if (!row || row.length === 0) {
            return res.status(404).json({errorMsg: "Username/Email not found"});
        };

        const hashedPass = md5(password);

        if (hashedPass !== row[0].password) {
            return res.status(400).json({errorMsg: "Password is incorrect"});
        };

        res.sendStatus(200);
    } catch (err) {
        console.log(err);
    }
};
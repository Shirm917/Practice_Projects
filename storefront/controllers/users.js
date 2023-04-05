import db from "../config/db.js";
import md5 from md5;

export const register = async(req,res) => {
    const {firstName,lastName,email,username,password} = req.body;

    try {
        const row = await db("users")
        .select("email")
        .where("email",email);

        if (row || row.length > 0) {
            return res.status(400).json({msg: "Email already exists"});
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
        return res.status(400).json({msg: "Username already exists"});
    };
};
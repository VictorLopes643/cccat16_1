import crypto from "crypto";
import express from "express";
import pgp from "pg-promise";
import { Signup } from "../application/Signup";
import { AccountDAODatabase } from "../resource/AccountDAO";
import { GetAccount } from "../application/GetAccount";
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
	try {
		const accountDAO = new AccountDAODatabase();
		const signup = new Signup(accountDAO);
		const output = await signup.execute(req.body);
		res.json(output);
	} catch (error: any) {
		res.status(422).json({
			message: error.message
		});
	}
});

app.get("/accounts/:accountId", async function (req, res) {
	const accountDAO = new AccountDAODatabase();
	const getAccount = new GetAccount(accountDAO);
	const input = {
		accountId: req.params.accountId
	};
	const account = await getAccount.execute(input);
	res.json(account);
});

app.listen(3000);

const app = require('../../app');

describe("Authentication Test", () => {

    test("Login Successful", async() => {
        const username = 'Ben';
        const password = 'test';

        const response = await request(app).post("/login/password").send({
            username: username,
            password: password
        })

        expect(response.body.failureMessage).toBeFalsy();
    })

    test("Login Unsuccessful", async() => {
        const username = 'Ben';
        const password = 'test';

        const response = await request(app).post("/login/password").send({
            username: username,
            password: password
        })

        expect(response.body.failureMessage).toBeTruthy();
    })

    test("Logout", async() => {
        const response = await request(app).post("/login/password")

        expect(response.statusCode).toEqual(200);
    })

    test("Sign Up Successful", async () => {
        const username = 'Ben';
        const password = 'test';

        const response = await request(app).post("/signup").send({
            username: username,
            password: password
        })

        expect(response.statusCode).toEqual(200);

        response = await request(app).get("/user").send({
            username: username
        })

        expect(response.statusCode).toEqual(200);
        expect(response.body.username).toEqual(username);
    })

    test("Sign Up Failed", async () => {
        const response = await request(app).post("/signup").send({
            username: 'Ben',
            password: 'test'
        })
        expect(response.statusCode).throw();
    })
}) 
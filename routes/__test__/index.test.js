const { param } = require("..");
const app = require("../../app")

describe("Authentication Test", () => {

    test("Get All Todos", async() => {
        const response = await request(app).get("/").send({
            username: username,
        })

        expect(response.body.username).toEqual(username);
    })

    test("Get Active Todos", async() => {
        const response = await request(app).get("/active").send({
            username: username,
            filter: 'active'
        })

        expect(response.body.username).toEqual(username);
    })

    test("Get Completed Todos", async() => {
        const response = await request(app).get("/completed").send({
            username: username,
            filter: 'completed'
        })

        expect(response.body.username).toEqual(username);
    })

    test("Add Todos", async() => {
        const response = await request(app).post("/:id)").send({
            userId: user.id,
            title: title,
            completed: '0'
        })

        expect(response.user.userId).toEqual(userId);
        expect(response.body.title).toEqual(title);
        expect(response.body.completed).toEqual('0');
    })

    test("Update Todos", async() => {
        const response = await request(app).post("/completed").send({
            title: title,
            completed: '1',
            recordId: param.id,
            userId: user.id
        })

        expect(response.user.userId).toEqual(userId);
        expect(response.body.title).toEqual(title);
        expect(response.body.recordId).toEqual(param.id);
        expect(response.body.completed).toEqual('1');
    })

    test("Delete Selected Todos", async() => {
        const response = await request(app).post("/:id(1000)/delete").send({
            recordId: param.id,
            userId: user.id
        })

        expect(response.body.recordId).toEqual(param.id);
        expect(response.user.userId).toEqual(userId);
    })
    test("Update Selected Todos", async() => {
        const response = await request(app).post("/toggle-all").send({
            userId: user.id,
            completed: '1'
        })

        expect(response.user.userId).toEqual(userId);
        expect(response.body.completed).toEqual('1');
    })

    test("Clear Completed Todos", async() => {
        const response = await request(app).get("/clear-completed").send({
            userId: user.id,
            completed: '1'
        })

        expect(response.user.userId).toEqual(userId);
        expect(response.body.completed).toEqual('1');
    })
})
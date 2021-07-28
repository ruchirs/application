const request = require('supertest');
const app = require('./server.js')

describe('dummy server', () => {

    //before every test
    beforeEach(async () => {
        server = await app.listen(7070);    //Any empty port should work to run the test script
        global.agent = request.agent(server);
    })

    //after every test
    afterEach(async () => {
        await server.close();
    })

    describe('pizza sizes', () => {
        test("responds with status 200 when GET method is called", () => {
            return request(server)
              .get("/pizza")
              .then((response) => {
                expect(response.statusCode).toBe(200);
              });
          });
          test("response should have expected number of pizza sizes, and must have a name and image", () => {
            return request(server)
              .get("/pizza")
              .then((response) => {
                expect(response.body.length).toBe(3);
                response.body.forEach((size) => {
                  expect(typeof size.name).toBe("string");
                  expect(typeof size.imagePath).toBe("string");
                });
              });
          });
    })

})

describe("toppings", () => {
    test("responds with status 200 when GET method is called", () => {
      return request(server)
        .get("/toppings")
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
    test("response should have expected number of pizza toppings, and have a name and image", () => {
      return request(server)
        .get("/toppings")
        .then((response) => {
          expect(response.body.length).toBe(4);
          response.body.forEach((topping) => {
            expect(typeof topping.name).toBe("string");
            expect(typeof topping.imagePath).toBe("string");
          });
        });
    });
  });
// e2e test
import request from "supertest";
import App from "./App.js";

describe("GET /initialTicker", () => {
  describe("Basic GET", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(App).get("/initialTickets");
      expect(response.statusCode).toBe(200);
    });

    test("should specify json in the content type header", async () => {
      const response = await request(App).get("/initialTickets");
      expect(response.header["content-type"]).toEqual(
        expect.stringContaining("application/json")
      );
    });
  });
});

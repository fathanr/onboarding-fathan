const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4NzMxIiwiZ3JvdXBfaWQiOiIwIiwiZW1haWwiOiJ0ZWd1aC5wcmF0YW1hQHBhbWFwZXJzYWRhLmNvbSIsInJvbGUiOiJhZG1pbiBtciIsImRpc3RyaWN0X2NvZGUiOiJKSUVQIiwiZGlzdHJpY3RfYWNjZXNzIjoiW1wiQUxMXCJdIiwibmFtZSI6IlRFR1VIIElNQU0gUFJBVEFNQSIsInR5cGUiOiJhZG1pbiBtciIsImpvYl9ncm91cCI6IlRSRUEiLCJwb3NpdGlvbl9pZCI6IkhPNkZJMDE3IiwidXNlcl9pZCI6InA2MTE1NTA3IiwiZGl2aXNpb24iOiJGQVRCIiwibmJmIjoxNjUwODU3MTg5LCJleHAiOjE2NTA5NDM1ODksImlhdCI6MTY1MDg1NzE4OX0.gHFoQjyYlc3vJnfy6F4z3InknfweMRKeUhQxMaC6KOk"

describe("Test User Access", function () {

    it("Success Get List User Access", function (done) {
        api.get("/api/v1/useraccess")
        .set("Authorization", "bearer " + token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("employee_id")
            expect(response.body.data.items[2]).to.have.property("id")
            done();
        })
    })

})
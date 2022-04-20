const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

global.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4NzMxIiwiZ3JvdXBfaWQiOiIwIiwiZW1haWwiOiJ0ZWd1aC5wcmF0YW1hQHBhbWFwZXJzYWRhLmNvbSIsInJvbGUiOiJhZG1pbiBtciIsImRpc3RyaWN0X2NvZGUiOiJKSUVQIiwiZGlzdHJpY3RfYWNjZXNzIjoiW1wiQUxMXCJdIiwibmFtZSI6IlRFR1VIIElNQU0gUFJBVEFNQSIsInR5cGUiOiJhZG1pbiBtciIsImpvYl9ncm91cCI6IlRSRUEiLCJwb3NpdGlvbl9pZCI6IkhPNkZJMDE3IiwidXNlcl9pZCI6InA2MTE1NTA3IiwiZGl2aXNpb24iOiJGQVRCIiwibmJmIjoxNjUwMzgxMzY1LCJleHAiOjE2NTA0Njc3NjUsImlhdCI6MTY1MDM4MTM2NX0.rjcYzHutx-2y3t06Y01ApsKpF24pLuwv3IeDJOqPoNg"
global.idUser = "68885d0a-f26a-48a9-a250-183a43d759f2"
global.wrongIdUser = "00000000-0000-000"

describe("Test Detail User Access", function () {

    it("Success Get Detail User Access", function (done) {
        api.get("/api/v1/useraccess/" + global.idUser)
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property("employee_id")
            expect(response.body.data).to.have.property("id")
            done();
        })
    })

})
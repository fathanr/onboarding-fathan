const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

global.idActualPeriod = "43fd2e03-0cef-46a1-aa1f-a03b5c64c6ab"

describe("Test Detail Period Actual", function () {

    it("Success Get Detail Period Actual", function (done) {
        api.get("/api/v1/periodactual/" + global.idActualPeriod)
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period")
            expect(response.body.data).to.have.property("status")
        done();
        })
    })

})
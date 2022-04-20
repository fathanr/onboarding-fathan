const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

describe("Test Update Period Actual", function () {

    it("Success Update Period Actual", function (done) {
        api.put("/api/v1/periodactual/" + global.idActualPeriod)
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + global.token)
        .send({
            "period": "12A",
            "year": 2025,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(200);
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("year")
            expect(response.body).to.have.property("period")
            expect(response.body).to.have.property("status")
            done();
        })
    })

    it("Failed Update Period Actual", function (done) {
        api.put("/api/v1/periodactual/" + global.idActualPeriod)
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + global.token)
        .send({
            "period": "12A",
            "year": 2025,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(500);
            expect(response.body).to.have.property("id")
            expect(response.body).to.have.property("year")
            expect(response.body).to.have.property("period")
            expect(response.body).to.have.property("status")
            done();
        })
    })


})
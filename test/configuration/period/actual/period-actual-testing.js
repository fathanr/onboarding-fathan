const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

describe("Testing Period Actual", function () {

    //Create Data
    it("Success Create Period Actual", function (done) {
        api.post("/api/v1/periodactual/")
        .set("Content-Type", "application/json")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .send({
            "period": "11",
            "year": 2029,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            // console.log(response.request)
            expect(response.status).to.equals(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period")
            expect(response.body.data).to.have.property("status")
        done();
        
        localStorage.setItem("idActualPeriod", response.body.data.id)

        })
    })

    it("Failed Create Period Actual", function (done) {
        api.post("/api/v1/periodactual/")
        .set("Content-Type", "application/json")
        // .set("Authorization", "bearer " + localStorage.getItem("token"))
        .send({
            "period": "12A",
            "year": 2025,
            "status": "OPEN"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(401);
            done();
        })
    })

    //Get List Data 
    it("Success Get Detail Period Actual", function (done) {
        api.get("/api/v1/periodactual/" + localStorage.getItem("idActualPeriod"))
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period")
            expect(response.body.data).to.have.property("status")
        done();
        })
    })

    //Update Data
    it("Success Get List Period Actual", function (done) {
        api.get("/api/v1/periodactual")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("id")
            expect(response.body.data.items[2]).to.have.property("year")
            expect(response.body.data.items[2]).to.have.property("period")
            expect(response.body.data.items[2]).to.have.property("status")
            done();
        })
    })

    it("Success Update Period Actual", function (done) {
        api.put("/api/v1/periodactual/" + localStorage.getItem("idActualPeriod"))
        .set("Content-Type", "application/json")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .send({
            "period": "10",
            "year": 2029,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period")
            expect(response.body.data).to.have.property("status")
            done();
        })
    })

    //Delete Data
    it("Success Delete Period Actual", function (done) {
        api.patch("/api/v1/periodactual/")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .send({
            "period_actual_id": [
                localStorage.getItem("idActualPeriod")
            ]
        })
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            done();
        })
    })
})
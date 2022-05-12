const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4NzMxIiwiZ3JvdXBfaWQiOiIwIiwiZW1haWwiOiJ0ZWd1aC5wcmF0YW1hQHBhbWFwZXJzYWRhLmNvbSIsInJvbGUiOiJhZG1pbiBtciIsImRpc3RyaWN0X2NvZGUiOiJKSUVQIiwiZGlzdHJpY3RfYWNjZXNzIjoiW1wiQUxMXCJdIiwibmFtZSI6IlRFR1VIIElNQU0gUFJBVEFNQSIsInR5cGUiOiJhZG1pbiBtciIsImpvYl9ncm91cCI6IlRSRUEiLCJwb3NpdGlvbl9pZCI6IkhPNkZJMDE3IiwidXNlcl9pZCI6InA2MTE1NTA3IiwiZGl2aXNpb24iOiJGQVRCIiwibmJmIjoxNjUyMDY1MzMwLCJleHAiOjE2NTIxNTE3MzAsImlhdCI6MTY1MjA2NTMzMH0.Z-SHKfLMQziY_J2v9GEV7KRRQ-0JplJogdKyn2N1-U0")

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)


describe("Automation Testing Period Plan", function () {
    
    it("Success Create Period Plan", function (done) {
        
        
        api.post("/api/v1/periodplan")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .set("Content-Type", "application/json")
        .send({

            "period_master_id": "9E624F3A-139A-47FE-82C9-7AF217633981",
            "year": 2021,
            "status": "OPEN"
        })


        .end(function ( error, response ) {
            // console.log(response.body.data.id)
            expect(response, "response should exist").to.exist;
            expect(response.status).to.equals(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period_master")
            expect(response.body.data).to.have.property("status")

            localStorage.setItem("idPeriodPlan", response.body.data.id);

        done();
        })
    })

    it("Success Get List Period Plan", function (done) {
        api.get("/api/v1/periodplan")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
        // console.log(response.request)
            expect(response.status).to.equal(200);
            expect(response.body.data.items[0]).to.have.property("id")
            expect(response.body.data.items[0]).to.have.property("year")
            expect(response.body.data.items[0]).to.have.property("period_master")
            expect(response.body.data.items[0]).to.have.property("status")
            expect(response.body.data.items[0].period_master).to.have.property("id")
            expect(response.body.data.items[0].period_master).to.have.property("name")
            expect(response.body.data.items[0].period_master).to.have.property("type")
        done();
        })
    })
    
    it("Success Get List Period Plan by Search ", function (done) {
        api.get("/api/v1/periodplan?search=2022")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[0]).to.have.property("id")
            expect(response.body.data.items[0]).to.have.property("year")
            expect(response.body.data.items[0]).to.have.property("period_master")
            expect(response.body.data.items[0]).to.have.property("status")
            expect(response.body.data.items[0].period_master).to.have.property("id")
            expect(response.body.data.items[0].period_master).to.have.property("name")
            expect(response.body.data.items[0].period_master).to.have.property("type")
            done();
        })
    })
    
    it("Success Get List Period  by All Filter", function (done) {
        api.get("/api/v1/periodplan?type=INTERNAL&budget_period=MB&year=2021&status=OPEN")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[0]).to.have.property("id")
            expect(response.body.data.items[0]).to.have.property("year")
            expect(response.body.data.items[0]).to.have.property("period_master")
            expect(response.body.data.items[0]).to.have.property("status")
            expect(response.body.data.items[0].period_master).to.have.property("id")
            expect(response.body.data.items[0].period_master).to.have.property("name")
            expect(response.body.data.items[0].period_master).to.have.property("type")
            done();
        })
    })

    it("Success Get Detail Period Plan", function (done) {
        api.get("/api/v1/periodplan/" + localStorage.getItem("idPeriodPlan"))
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response).to.have.property("body")
            expect(response.body.data.period_master).to.have.keys("id", "name", "type")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("status")
            expect(response.body.data).to.have.property("period_master")
            done();
        })
    })

    it("Success Update Period Plan", function (done) {
        api.put("/api/v1/periodplan/" + localStorage.getItem("idPeriodPlan"))
        .set("Content-Type", "application/json")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .send({
            "period_master_id": "9e624f3a-139a-47fe-82c9-7af217633981",
            "year": 2021,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(200);
            expect(response.body.data).to.have.property("id")
            expect(response.body.data).to.have.property("year")
            expect(response.body.data).to.have.property("period_master")
            expect(response.body.data).to.have.property("status")
        done();
        })
    })

    it("Failed Update Period Plan", function (done) {
        api.put("/api/v1/periodplan/" + localStorage.getItem("idPeriodPlan"))
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .send({
            "period_master_id": "9e624f3a-139a-47fe-82c9-7af217633981",
            "year": 2021,
            "status": "CLOSE"
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(500);
        done();
        })
    })

    it("Success Delete Period Plan", function (done) {
        api.patch("/api/v1/periodplan/")
        .set("Authorization", "Bearer " + localStorage.getItem("token"))
        .send({
            "period_plan_id": [
                localStorage.getItem("idPeriodPlan")
            ]
        })
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response).to.have.property("body")
            expect(response.body).to.have.keys("data", "status_code", "message", "success", "errors")
            done();
        })
    })
})
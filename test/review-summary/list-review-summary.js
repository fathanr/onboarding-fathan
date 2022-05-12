const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

describe("Test List Review Summary", function () {

    it("Success Get List Review Summary", function (done) {
        api.get("/api/v1/reviewsummary/")
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("id")
            expect(response.body.data.items[2]).to.have.property("name")
            expect(response.body.data.items[2]).to.have.property("year")
            expect(response.body.data.items[2]).to.have.property("period")
            expect(response.body.data.items[2]).to.have.property("status")
            done();
        })
    })
    
    it("Success Get List Review Summary with filter by only year", function (done) {
        api.get("/api/v1/reviewsummary/?year=2022")
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("id")
            expect(response.body.data.items[2]).to.have.property("name")
            expect(response.body.data.items[2]).to.have.property("year")
            expect(response.body.data.items[2]).to.have.property("period")
            expect(response.body.data.items[2]).to.have.property("status")
            done();
        })
    })
    
    it("Success Get List Review Summary with filter by only period", function (done) {
        api.get("/api/v1/reviewsummary/?period=1")
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("id")
            expect(response.body.data.items[2]).to.have.property("name")
            expect(response.body.data.items[2]).to.have.property("year")
            expect(response.body.data.items[2]).to.have.property("period")
            expect(response.body.data.items[2]).to.have.property("status")
            done();
        })
    })

    it("Success Get List Review Summary with filter by year and period", function (done) {
        api.get("/api/v1/reviewsummary/?year=2022&period=1")
        .set("Authorization", "bearer " + global.token)
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("id")
            expect(response.body.data.items[2]).to.have.property("name")
            expect(response.body.data.items[2]).to.have.property("year")
            expect(response.body.data.items[2]).to.have.property("period")
            expect(response.body.data.items[2]).to.have.property("status")
            done();
        })
    })

})
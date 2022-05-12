// const chai = require("chai");
// const expect = require("chai").expect;
// const chaiHttp = require("chai-http");
// require("dotenv").config();

// chai.use(chaiHttp);

// const api = chai.request(process.env.BASE_URL)

// describe("Test Download Excel Review Summary", function () {

//     it("Success Download Excel", function (done) {
//         api.get("/api/v1/periodactual")
//         .set("Authorization", "bearer " + global.token)
//         .end(function ( error, response ) {
//             expect(response.status).to.equal(200);
//             expect(response.body.data.items[2]).to.have.property("id")
//             expect(response.body.data.items[2]).to.have.property("year")
//             expect(response.body.data.items[2]).to.have.property("period")
//             expect(response.body.data.items[2]).to.have.property("status")
//             done();
//         })
//     })

// })
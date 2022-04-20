const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

global.userAccessId = "f8977deb-5847-4909-984d-0f5dd8051e7e";

describe("Test Create User Access", function () {

    it("Success Create User Access", function (done) {
        api.post("/api/v1/useraccess/" + global.userAccessId)
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + global.token)
        .send({
            "user_id": "1e06d543-ee70-489e-9d78-7e7c5238c298",
            "can_access_feature": true,
            "can_manage_period": true,
            "can_modify_upload_update": true,
            "can_modify_delete": true,
            "can_review_data": false,
            "can_validate_matrix": false,
            "can_version_master": false,
            "can_access_activity_log": false,
            "can_restore_data": false
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(200);
            expect(response.body).to.have.property("user_id")
            expect(response.body).to.have.property("id")
            done();
        })
    })

    it("Failed Create User Access", function (done) {
        api.post("/api/v1/useraccess/" + global.userAccessId)
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + global.token)
        .send({
            "user_id": "1e06d543-ee70-489e-9d78-7e7c5238c298",
            "can_access_feature": true,
            "can_manage_period": true,
            "can_modify_upload_update": true,
            "can_modify_delete": true,
            "can_review_data": false,
            "can_validate_matrix": false,
            "can_version_master": false,
            "can_access_activity_log": false,
            "can_restore_data": false
        })

        .end(function ( error, response ) {
            expect(response.status).to.equals(405);
            done();
        })
    })

})
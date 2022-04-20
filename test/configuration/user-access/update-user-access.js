const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

describe("Test Update User Access", function () {

    it("Success Update User Access", function (done) {
        api.put("/api/v1/useraccess/" + global.userAccessId)
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

    it("Failed Update User Access", function (done) {
        api.put("/api/v1/useraccess/" + global.userAccessId)
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
            expect(response.status).to.equals(500);
            done();
        })
    })

})
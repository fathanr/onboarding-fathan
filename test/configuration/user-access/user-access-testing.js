const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
require("dotenv").config();

localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4NzMxIiwiZ3JvdXBfaWQiOiIwIiwiZW1haWwiOiJ0ZWd1aC5wcmF0YW1hQHBhbWFwZXJzYWRhLmNvbSIsInJvbGUiOiJhZG1pbiBtciIsImRpc3RyaWN0X2NvZGUiOiJKSUVQIiwiZGlzdHJpY3RfYWNjZXNzIjoiW1wiQUxMXCJdIiwibmFtZSI6IlRFR1VIIElNQU0gUFJBVEFNQSIsInR5cGUiOiJhZG1pbiBtciIsImpvYl9ncm91cCI6IlRSRUEiLCJwb3NpdGlvbl9pZCI6IkhPNkZJMDE3IiwidXNlcl9pZCI6InA2MTE1NTA3IiwiZGl2aXNpb24iOiJGQVRCIiwibmJmIjoxNjUyMTYyOTEwLCJleHAiOjE2NTIyNDkzMTAsImlhdCI6MTY1MjE2MjkxMH0.FI5zZY0_Hf9GIXzoiUtzpQzKTkDpnPTIZMgwqxMcTmc")

chai.use(chaiHttp);

const api = chai.request(process.env.BASE_URL)

describe("Testing User Access", function () {

    it("Success Create User Access", function (done) {
        api.post("/api/v1/useraccess/")
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
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
            expect(response.body.data).to.have.property("user_id")
            expect(response.body.data).to.have.property("id")
            done();
        
        localStorage.setItem("userAccessId", response.body.data.id);
    
        })
    })

    it("Failed Create User Access", function (done) {
        api.post("/api/v1/useraccess/" + localStorage.getItem("userAccessId"))
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
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

    it("Success Get Detail User Access", function (done) {
        api.get("/api/v1/useraccess/" + localStorage.getItem("userAccessId"))
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data).to.have.property("employee_id")
            expect(response.body.data).to.have.property("id")
            done();
        })
    })

    it("Success Get List User Access", function (done) {
        api.get("/api/v1/useraccess")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
        .end(function ( error, response ) {
            expect(response.status).to.equal(200);
            expect(response.body.data.items[2]).to.have.property("employee_id")
            expect(response.body.data.items[2]).to.have.property("id")
            done();
        })
    })

    it("Success Update User Access", function (done) {
        api.put("/api/v1/useraccess/" + localStorage.getItem("userAccessId"))
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
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
        api.put("/api/v1/useraccess/" + localStorage.getItem("userAccessId"))
        .set("Content-Type", "application/json")
        .set("Authorization", "bearer " + localStorage.getItem("token"))
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
const app = require("../app");
const request = require("supertest");
const should = require("should");
let todoTest = {
  id:Math.random() * (100 + 1),
  content: "testContent",
  status: 0,
};
describe("Routes Test", () => {
  // 新增数据
  it("add", (done) => {
    request(app)
      .post("/api/add_todo")
      .send(todoTest)
      .expect(200, (err, res) => {
        should.not.exist(err);
        res.text.should.containEql("新增成功");
        done();
      });
  });
  // 查询数据
  it("query", (done) => {
    request(app)
      .post("/api/get_data")
      .expect(200, (err, res) => {
        should.not.exist(err);
        todo = res.body[res.body.length - 1];
        done();
      });
  });
  //改变数据
  it("change", (done) => {
    request(app)
      .post("/api/change_todo")
      .send(todoTest)
      .expect(200, (err) => {
        should.not.exist(err);
        done();
      });
  });
  it("/query", (done) => {
    request(app)
      .post("/api/get_data")
      .expect(200, (err, res) => {
        should.not.exist(err);
        res.body[res.body.length - 1].status.should.be.equal(1);
        done();
      });
  });
  //删除数据
  it("delete", (done) => {
    request(app)
      .post("/api/del_todo")
      .send(todoTest)
      .expect(200, (err, res) => {
        should.not.exist(err);
        res.body.ok.should.be.equal(1);
        done();
      });
  });
});

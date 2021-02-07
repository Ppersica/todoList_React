const models = require("../db/models");
const TodoModel = models.todoModel;
const should = require("chai").should();
// const delay = require('delay')

// describe('Test', function() {
//     it('should resolve', async function() {
//       await delay(1000)
//     })
// })
describe("todo test", () => {
  it("addTodo", (done) => {
    const todo = new TodoModel({
      id: 001,
      content: "test001",
      status: 0,
    });
    todo.save((err) => {
      if (err) {
        return done(err);
      }
      TodoModel.find({}, (err, result) => {
        if (err) {
          return done(err);
        } else {
          result.length.should.equal(4);
          done();
        }
      });
    });
  });
});

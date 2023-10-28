const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");

const app = require("../server"); // Import your Express app

describe("Product Management", () => {
  const testProduct = {
    name: "Test Product",
    price: 19.99, // Use a variable for the product price
  };

  it('should create a new product', (done) => {
    request(app)
      .post('/api/products') // Specify the correct endpoint for creating a product
      .send(testProduct)
      .expect(201) // Expect a 201 status code
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('_id'); // Ensure the response contains the product ID
        expect(res.body).to.have.property('name', testProduct.name); // Match the product name
        expect(res.body).to.have.property('price', testProduct.price); // Match the product price
        // You can add more assertions if necessary
        done();
      });
  });

  it("should read all products", (done) => {
    request(app)
      .get('/api/products') // Specify the correct endpoint for getting all products
      .expect(200) // Expect a 200 status code
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array'); // Ensure the response contains an array of products
        // You can add more assertions if necessary, such as checking specific properties of the products
        done();
      });
  });

});
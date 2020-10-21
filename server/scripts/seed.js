/* eslint-disable no-loop-func */
const faker = require('faker');
const fs = require('fs');

const writeProducts = fs.createWriteStream('products.json');

function writeOneThousandProducts(writer, encoding, callback) {
  let i = 1000;
  let productId = 0;
  let styleId = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      productId += 1;
      /* Generate Related Products Array */
      const generateRelated = () => {
        const related = [];
        for (let k = 0; k < Math.floor(Math.random() * Math.floor(7)); k++) {
          related.push(Math.floor(Math.random() * Math.floor(10000)));
        }
        return related;
      };
      /* Generate Features Array */
      const generateFeatures = () => {
        const features = [];
        for (let k = 0; k < Math.floor(Math.random() * Math.floor(6)); k++) {
          features.push({
            feature: faker.commerce.productMaterial(),
            value: faker.lorem.word(),
          });
        }
        return features;
      };
      /* Generate Individual Product */
      const generateProduct = () => {
        const product = {
          _id: productId,
          name: faker.commerce.productName(),
          slogan: faker.lorem.sentence(),
          description: faker.commerce.productDescription(),
          category: faker.commerce.productAdjective(),
          default_price: faker.commerce.price(),
          features: generateFeatures(),
          related: generateRelated(),
          styles: generateStyles(),
        };
        return product;
      };

      let dataObj = JSON.stringify({});
      if (i === 0) {
        writer.write(dataObj, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(dataObj, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeOneThousandProducts(writeProducts, 'utf-8', () => {
  writeProducts.end();
});

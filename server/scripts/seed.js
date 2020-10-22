/* eslint-disable no-loop-func */
const faker = require('faker');
const fs = require('fs');

const writeProducts = fs.createWriteStream('products.json');

function writeOneThousandProducts(writer, encoding, callback) {
  console.time('NoSQL Generation Speed');
  let i = 1000;
  let productId = 0;
  let styleId = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      productId += 1;

      /* Generate Skus Object */
      const generateSkus = (category) => {
        let skus;
        if (category === 'Footwear') {
          skus = {
            7: Math.floor(Math.random() * (51 - 1) + 1),
            7.5: Math.floor(Math.random() * (51 - 1) + 1),
            8: Math.floor(Math.random() * (51 - 1) + 1),
            8.5: Math.floor(Math.random() * (51 - 1) + 1),
            9: Math.floor(Math.random() * (51 - 1) + 1),
            9.5: Math.floor(Math.random() * (51 - 1) + 1),
            10: Math.floor(Math.random() * (51 - 1) + 1),
            10.5: Math.floor(Math.random() * (51 - 1) + 1),
            11: Math.floor(Math.random() * (51 - 1) + 1),
            11.5: Math.floor(Math.random() * (51 - 1) + 1),
            12: Math.floor(Math.random() * (51 - 1) + 1),
          };
        }
        if (category === 'Accessories') {
          skus = {
            'One Size': Math.floor(Math.random() * (51 - 1) + 1),
          };
        }
        if (category === 'Clothing') {
          skus = {
            XS: Math.floor(Math.random() * (51 - 1) + 1),
            S: Math.floor(Math.random() * (51 - 1) + 1),
            M: Math.floor(Math.random() * (51 - 1) + 1),
            L: Math.floor(Math.random() * (51 - 1) + 1),
            XL: Math.floor(Math.random() * (51 - 1) + 1),
            XXL: Math.floor(Math.random() * (51 - 1) + 1),
          };
        }
        return skus;
      };

      /* Generate Photos Array */
      const generatePhotos = () => {
        const photos = [];
        for (let j = 0; j < Math.floor(Math.random() * Math.floor(6)); j++) {
          photos.push({
            thumbnail_url: faker.image.imageUrl(),
            url: faker.image.imageUrl(),
          });
        }
        return photos;
      };

      /* Generate Styles Array */
      const generateStyles = (category, price) => {
        const styles = [];
        let isDefault = 1;
        for (let k = 0; k < Math.floor(Math.random() * (6 - 1) + 1); k++) {
          styles.push({
            style_id: styleId,
            name: faker.lorem.word(),
            original_price: price,
            sale_price: `${(price * 0.75)}`,
            'default?': isDefault,
            photos: generatePhotos(),
            skus: generateSkus(category),
          });
          isDefault = 0;
          styleId += 1;
        }
        return styles;
      };

      /* Generate Related Products Array */
      const generateRelated = () => {
        const related = [];
        for (let l = 0; l < Math.floor(Math.random() * Math.floor(7)); l++) {
          related.push(Math.floor(Math.random() * Math.floor(1000)));
        }
        return related;
      };

      /* Generate Features Array */
      const generateFeatures = () => {
        const features = [];
        for (let m = 0; m < Math.floor(Math.random() * (7 - 1) + 1); m++) {
          features.push({
            feature: faker.commerce.productMaterial(),
            value: faker.lorem.word(),
          });
        }
        return features;
      };

      /* Generate Product Category */
      const generateCategory = () => {
        const categories = ['Accessories', 'Footwear', 'Clothing'];
        const idx = Math.floor(Math.random() * (3 - 0) + 0);
        return categories[idx];
      };

      /* Generate Individual Product */
      const generateProduct = () => {
        const randCat = generateCategory();
        const randPrice = faker.commerce.price();
        const product = {
          _id: productId,
          name: faker.commerce.productName(),
          slogan: faker.lorem.sentence(),
          description: faker.lorem.sentence(),
          category: randCat,
          default_price: randPrice,
          features: generateFeatures(),
          related: generateRelated(),
          styles: generateStyles(randCat, randPrice),
        };
        return product;
      };

      const dataObj = JSON.stringify(generateProduct());

      if (i === 0) {
        console.timeEnd('NoSQL Generation Speed');
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

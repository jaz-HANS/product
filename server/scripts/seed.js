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
      id += 1;
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

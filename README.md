## Project setup
```
npm install
```

### Seed DB (MongoDB)
- (WARNING: This will insert 10M records into your DB and may take 5-10 minutes depending on your machine. After a few minutes, you'll receive a 'NoSQL Generation Speed (time)' log in your console, followed shortly by additional console progress updates.) 
```
npm run seed
```

### Start server, launch app (port 3001)
- (You'll know the database hasn't been correctly established if you see a 504 upon page load.)
```
npm run server
```

### Compiles
```
npm run build
```

### Stress Test
- (Should you want to stress test, run this after you've seeded your DB and launched the server.)
```
npm run artillery
```

## Product Detail Page
The product detail page will show relevant information for a single product in the catalogue.  Our catalogue is organized by *products*.  One single product can be associated with many sizes and styles which each result in unique SKUs (stock keeping units).  The product detail page will present items at the product level.  Further breakdown by style or size will only be reflected within the product detail page.

The same product detail page will be shown for every product in the catalogue.  Upon navigating to the product detail page or selecting a new product to display, the contents of the page will update to show information relevant to the selected product. 

The item detail page will be comprised of distinct modules.  Each module will display information related to the product being displayed.   
The Overview module will be the top-most module on the Product Detail page.  The functionality contained within this module can be divided into several pieces:

	1. Image gallery 
		1. Default View
			* Dynamic Image
			* Overlay of Dynamic Thumbnails
			* Navigation Arrows for Thumbnails and main Image
			* Magnifying Glass
		2. Expanded View
			* Dynamic Image Overlay
			* Navigation Arrows
			* Image Icons
			* Zoom In / Zoom Out Icons
	2. Product information
		1. Star Rating
			* Average Rating
			* 5 Stars
			* Reviews Link
		2. Product Category
		3. Product Title
		4. Price
			* Dynamic Price
			* Prices Linked to SKUs
			* Default Price / Style
			* Idea: Enter promo code to see adjusted price
		5. Product Overview
			* Text Field
		6. Social Share
			* Pinterest
			* Twitter
			* Facebook
	3. Style Selector
		* Thumbnails
		* Rows
		* Default First Style / Price
		* Selected Style Checkmark Overlay
	4. Add to Cart
		1. Size Dropdown
			* Default Text “Select Size”
			* In Stock / Out of Stock
		2. Quantity Selector
			* Range from 1 to max  in stock
			* If no size selected “-“
			* If size selected 1
		3. Button
			* Places item into cart
			* If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”
			* If there is no stock: This button should be hidden
			* If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.

# product API
### List Products

`GET /products/list`
Retrieves the list of products.

Parameters

| Parameter | Type    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| page      | integer | Selects the page of results to return.  Default 1.        |
| count     | integer | Specifies how many results per page to return. Default 5. |

Response

`Status: 200 OK `

```json
[
  {
		"id": 1,
		"name": "Camo Onesie",
		"slogan": "Blend in to your crowd",
		"description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
		"category": "Jackets",
		"default_price": "140"
	},
  {
		"id": 2,
		"name": "Bright Future Sunglasses",
		"slogan": "You've got to wear shades",
		"description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
		"category": "Accessories",
		"default_price": "69"
	},
  {
		"id": 3,
		"name": "Morning Joggers",
		"slogan": "Make yourself a morning person",
		"description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
		"category": "Pants",
		"default_price": "40"
	},
	// ...
]
```



### Product Information

Returns all product level information for a specified product id.

`GET /products/:product_id`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
	"id": 11,
	"name": "Air Minis 250",
	"slogan": "Full court support",
	"description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
	"category": "Basketball Shoes",
	"default_price": "0",
	"features": [
  	{
			"feature": "Sole",
			"value": "Rubber"
		},
  	{
			"feature": "Material",
			"value": "FullControlSkin"
		},
  	// ...
	],
}
```



### Product Styles

Returns the all styles available for the given product.

`GET /products/:product_id/styles`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
	"product_id": "1",
	"results": [
  	{
			"style_id": 1,
			"name": "Forest Green & Black",
			"original_price": "140",
			"sale_price": "0",
			"default?": 1,
			"photos": [
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				},
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				}
  			// ...
			],
		"skus": {
			"XS": 8,
			"S": 16,
			"M": 17,
			"L": 10,
			"XL": 15
		}
	},
  {
		"style_id": 2,
		"name": "Desert Brown & Tan",
		"original_price": "140",
		"sale_price": "0",
		"default?": 0,
		"photos": [
  			{
					"thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
			],
		"skus": {
			"S": 16,
			"XS": 8,
			"M": 17,
			"L": 10,
			"XL": 15,
			"XXL": 6
			}
	},
  // ...
}
```



### Related Products

Returns the id's of products related to the product specified.

`GET /products/:product_id/related`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
[
  2,
  3,
  8,
  7
],
```


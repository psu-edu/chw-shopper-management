# CHW Shopper Management

IST 256 group storefront project for Confused Hardware.

This repository contains a multi-page frontend prototype built with HTML, CSS, Bootstrap, and vanilla JavaScript. It includes shopper registration, a shopping page with filters and cart behavior, and a product management form that saves product data in browser localStorage.

## Project Scope

The project combines two assignment tracks:

1. Shopper Management page behavior and JSON data handling
2. Product Management page behavior and JSON data handling

All data is currently client-side (no backend database).

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5 (CDN)
- Vanilla JavaScript
- JSON (sample data files + browser localStorage)

## Current Pages

- `Homepage.html`
	- Landing page navbar and welcome card
	- Reads `userData` from localStorage and displays shopper info
- `Register.html`
	- Shopper signup form with browser validation
	- Saves shopper fields into localStorage under `userData`
	- Redirects to `homepage.html` after submit
- `Shopping.html`
	- Product grid (Raspberry Pi products)
	- Price filter, category toggle, sort options
	- Add-to-cart flow with toast notifications
	- Saves cart state under `cartData`
- `product-mang.html`
	- Product management form (new/update by product ID)
	- Saves products under `productData`
	- Displays stored JSON preview

## Data Files

- `data.json`
	- Seed/sample product document with `Products` array
- `group.JSON`
	- Group member/contact metadata

## JavaScript Files

- `script.js`
	- Contains shopper collection utilities (`shopperCollection` key), table/json rendering helpers, and form init logic
	- Designed for a form/table layout that is not fully wired to current HTML pages
- `scripts.js`
	- Present but currently empty

## Styling

- `styles.css`
	- Global baseline styles (light background and default font)
- `Shopping.html` also includes substantial inline styling for the storefront layout.

## Local Storage Keys Used

- `userData`: shopper registration payload
- `cartData`: shopping cart items and quantity
- `productData`: product management collection
- `shopperCollection`: used by `script.js` helper flow

## Run the Project

Because this is a static frontend project, you can run it directly in a browser.

1. Open `Homepage.html` in a browser (or with VS Code Live Server).
2. Use `Register.html` to create/update shopper details.
3. Visit `Shopping.html` for storefront filtering/sorting/cart behavior.
4. Open `product-mang.html` for product create/update testing.

## Suggested Demo Flow

1. Register a shopper on `Register.html`.
2. Confirm shopper details render on `Homepage.html`.
3. Add products in `Shopping.html` and confirm `cartData` updates.
4. Save/update products in `product-mang.html` and verify JSON preview.

## Known Gaps / Notes

- No backend persistence yet; data clears when browser localStorage is reset.
- `Register.html` redirects to `homepage.html` (lowercase) while file name is `Homepage.html`.
- Product management navbar references `ProductManagement.html`, but the file in this repo is `product-mang.html`.
- Some shopper logic in `script.js` appears to be from an alternate page structure and is not fully connected to current markup.

## Team

From `group.JSON`:

- Karim Alsayed
- Christian Merfert
- Aiden Donahue

const detailedProducts = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    category: "Electronics",
    price: 1200,
    rating: 4.5,
    stock: 30,
    discount: 10,
    isFeatured: true,
    tags: ["work", "portable", "windows"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-15"
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    category: "Electronics",
    price: 999,
    rating: 4.3,
    stock: 50,
    discount: 5,
    isFeatured: false,
    tags: ["android", "camera", "5G"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-03-10"
  },
  {
    id: 3,
    name: "Blender",
    brand: "Philips",
    category: "Home Appliances",
    price: 90,
    rating: 4.0,
    stock: 200,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "mixer", "easy-clean"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-11-22"
  },
  {
    id: 4,
    name: "LED TV",
    brand: "Sony",
    category: "Electronics",
    price: 1500,
    rating: 4.8,
    stock: 12,
    discount: 20,
    isFeatured: true,
    tags: ["smart", "4K", "entertainment"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-01"
  },
  {
    id: 5,
    name: "Air Fryer",
    brand: "Ninja",
    category: "Home Appliances",
    price: 180,
    rating: 4.6,
    stock: 80,
    discount: 10,
    isFeatured: false,
    tags: ["healthy", "kitchen"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-04-05"
  },
  {
    id: 6,
    name: "Gaming Console",
    brand: "Sony",
    category: "Electronics",
    price: 499,
    rating: 4.7,
    stock: 25,
    discount: 0,
    isFeatured: true,
    tags: ["gaming", "4K", "console"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-05-15"
  },
  {
    id: 7,
    name: "Smartwatch",
    brand: "Apple",
    category: "Electronics",
    price: 399,
    rating: 4.4,
    stock: 60,
    discount: 8,
    isFeatured: true,
    tags: ["fitness", "watch", "iOS"],
    warranty: { years: 1, type: "Onsite" },
    addedOn: "2023-06-01"
  },
  {
    id: 8,
    name: "Washing Machine",
    brand: "LG",
    category: "Home Appliances",
    price: 750,
    rating: 4.5,
    stock: 18,
    discount: 12,
    isFeatured: false,
    tags: ["laundry", "automatic"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-10"
  },
  {
    id: 9,
    name: "Microwave",
    brand: "Panasonic",
    category: "Home Appliances",
    price: 200,
    rating: 4.2,
    stock: 100,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "heating"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-12-15"
  },
  {
    id: 10,
    name: "Camera",
    brand: "Canon",
    category: "Electronics",
    price: 850,
    rating: 4.6,
    stock: 22,
    discount: 10,
    isFeatured: true,
    tags: ["dslr", "photography"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-25"
  },
  {
    id: 11,
    name: "Tablet",
    brand: "Lenovo",
    category: "Electronics",
    price: 300,
    rating: 4.1,
    stock: 70,
    discount: 5,
    isFeatured: false,
    tags: ["portable", "android"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-07-20"
  },
  {
    id: 12,
    name: "Vacuum Cleaner",
    brand: "Dyson",
    category: "Home Appliances",
    price: 600,
    rating: 4.7,
    stock: 15,
    discount: 10,
    isFeatured: true,
    tags: ["cleaning", "cordless"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-05-30"
  },
  {
    id: 13,
    name: "Router",
    brand: "TP-Link",
    category: "Electronics",
    price: 120,
    rating: 4.3,
    stock: 90,
    discount: 20,
    isFeatured: false,
    tags: ["wifi", "internet"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-01-05"
  }
]

// Get all products that are featured.

// Find all electronics with a rating above 4.5.

// List all products that were added after March 2023.

// Filter products that have both a discount ≥ 15% and stock > 50.

// 🧭 map()

// Create a list of product names with their final price after discount.

// Map products to include a priceRange field: "Low" (<$100), "Medium" ($100–500), "High" (>$500).

// Extract a list of objects with only: name, brand, category.

// 🔍 find()

// Find the first product with a warranty of more than 1 year.

// Find a product with the tag "kitchen" and rating > 4.2.

// ➗ reduce()

// Calculate the total inventory value (sum of price × stock).

// Find the average rating of all Home Appliances.

// Count the number of products in each category.

// 📊 sort()

// Sort all products by price descending.

// Sort products by rating, and if equal, then by price ascending.

// Sort products alphabetically by name.

// ✅ every() / some()

// Check if all products have at least a 1-year warranty.

// Check if any product has more than 25% discount.

// Check if all products in Personal Care are under $100.

// 🔄 Combined / Advanced

// Find the top 3 most expensive products in Home Appliances.

// Get a list of all products with stock under 20 and sorted by rating.

// Find the most expensive product for each category.

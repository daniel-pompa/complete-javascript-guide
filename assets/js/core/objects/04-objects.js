// Joining two or more objects using the spread operator
console.log('%cJoining two or more objects', 'color: #1e3a8a; font-weight: bold;');

// Original objects
const pcWorkstation = {
  name: 'PC Workstation',
  price: 2500,
  available: true,
  specs: {
    cpu: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
  },
  calculateDiscount(discount) {
    return this.price * (1 - discount / 100);
  },
};

const mouse = {
  name: 'Mouse',
  price: 50,
  available: true,
  specs: {
    type: 'Wireless',
    dpi: '16000',
    color: 'Black',
  },
  calculateDiscount(discount) {
    return this.price * (1 - discount / 100);
  },
};

const keyboard = {
  name: 'Keyboard',
  price: 100,
  available: true,
  specs: {
    type: 'Mechanical',
    switches: 'Cherry MX Blue',
    backlight: 'RGB',
  },
  calculateDiscount(discount) {
    return this.price * (1 - discount / 100);
  },
};

console.log('Initial objects:', { pcWorkstation, mouse, keyboard });

const customer = {
  firstName: 'Daniel',
  lastName: 'Pompa Pareja',
  email: 'daniel.pompa@gmail.com',
  premium: false,
  address: {
    street: 'False Street 20',
    city: 'Madrid',
    zip: '28001',
  },
};

console.log('Customer:', customer);

const order = {
  orderId: 'A001',
  date: new Date().toLocaleDateString(),
  items: ['PC Workstation', 'Mouse', 'Keyboard'],
  totalAmount: pcWorkstation.price + mouse.price + keyboard.price,
  shippingCost: 20,
  status: 'Processing',
  calculateTotalWithDiscounts() {
    const pcPrice = pcWorkstation.calculateDiscount(10);
    const mousePrice = mouse.calculateDiscount(10);
    const keyboardPrice = keyboard.calculateDiscount(5);
    return pcPrice + mousePrice + keyboardPrice + this.shippingCost;
  },
};

console.log('Order:', order);

// Combining objects using the spread operator
const combinedObject = {
  products: {
    pcWorkstation: { ...pcWorkstation },
    mouse: { ...mouse },
    keyboard: { ...keyboard },
  },
  customer: { ...customer },
  order: { ...order },
};

// Modifying the combined object
combinedObject.customer.premium = true; // Customer upgraded to premium
combinedObject.order.status = 'Shipped'; // Order status updated

console.log('Combined object:', combinedObject);

const {
  customer: {
    firstName,
    lastName,
    email,
    address: { street, city },
  },
  order: { items, totalAmount, shippingCost, date, calculateTotalWithDiscounts },
  products: { pcWorkstation: pcProduct, mouse: mouseProduct, keyboard: keyboardProduct },
} = combinedObject;

// Customer information
console.log(`Customer Name: ${firstName} ${lastName}`);
console.log(`Email: ${email}`);
console.log(`Address: ${street}, ${city}`);

// Order information
console.log(`Order Items: ${items.join(', ')}`);
console.log(`Order Total: ${totalAmount}€`);
console.log(`Shipping Cost: ${shippingCost}€`);
console.log(`Order Date: ${date}`);

// Discounts applied to products
console.log(
  `PC Workstation price with 10% discount: ${pcProduct.calculateDiscount(10)}€`
);
console.log(`Mouse price with 10% discount: ${mouseProduct.calculateDiscount(10)}€`);
console.log(`Keyboard price with 5% discount: ${keyboardProduct.calculateDiscount(5)}€`);

// Order total with discounts
const totalWithDiscounts = calculateTotalWithDiscounts.call(order);
console.log(`Order Total with discounts and shipping: ${totalWithDiscounts}€`);

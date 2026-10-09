const menuData = [
    {
        name: "Burgers & Snacks",
        items: [
            { id: "b1", name: "Grilled Chicken Steak Burger", price: 180, desc: "Tender grilled chicken steak with fresh veggies.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", isFeatured: true },
            { id: "b2", name: "American Juicy Chicken Burger", price: 165, desc: "Classic American style juicy chicken patty.", image: "https://images.unsplash.com/photo-1543059501-8390b17173b2?q=80&w=800&auto=format&fit=crop" },
            { id: "b3", name: "Smoky BBQ Chicken Wings (4 pcs)", price: 220, desc: "Tossed in rich smoky BBQ sauce.", image: "https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?q=80&w=800&auto=format&fit=crop" },
            { id: "b4", name: "Crispy Fried Chicken Wings (4 pcs)", price: 230, desc: "Golden fried and crispy perfection.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop" },
            { id: "b5", name: "Grilled Chicken Sandwich", price: 170, desc: "Healthy and delicious grilled chicken.", image: "https://images.unsplash.com/photo-1619881589316-56c7f9e6b587?q=80&w=800&auto=format&fit=crop" },
            { id: "b6", name: "Signature Chicken Sub Sandwich", price: 165, desc: "Our signature sub loaded with flavor.", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=800&auto=format&fit=crop" },
            { id: "b7", name: "Classic Grilled Cheese Sandwich", price: 190, desc: "Melted cheese in perfectly toasted bread.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop" },
            { id: "b8", name: "Chicken Shawarma Wrap", price: 130, desc: "Middle Eastern spiced chicken wrap.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" },
            { id: "b9", name: "Classic Nachos", price: 150, desc: "Crispy nachos with salsa.", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop" },
            { id: "b10", name: "Chicken Cheese Nachos", price: 170, desc: "Loaded with chicken and melted cheese.", image: "https://images.unsplash.com/photo-1582885994191-233c7062489c?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        name: "Fastfood & Fries",
        items: [
            { id: "f1", name: "Golden Crispy Chicken Strips (4 pcs)", price: 230, desc: "Crispy coated tender chicken strips.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop" },
            { id: "f2", name: "Thai Chicken Fry (Single)", price: 99, desc: "Spicy Thai style fried chicken.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop" },
            { id: "f3", name: "Thai Chicken Fry (4 pcs)", price: 350, desc: "Spicy Thai style fried chicken.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop" },
            { id: "f4", name: "Thai Chicken Fry (6 pcs)", price: 510, desc: "Spicy Thai style fried chicken.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop", isFeatured: true },
            { id: "f5", name: "Crispy Chicken Fry (Single)", price: 109, desc: "Classic crispy fried chicken piece.", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ce1?q=80&w=800&auto=format&fit=crop" },
            { id: "f6", name: "Crispy Chicken Fry (4 pcs)", price: 360, desc: "Classic crispy fried chicken pieces.", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ce1?q=80&w=800&auto=format&fit=crop" },
            { id: "f7", name: "Crispy Chicken Fry (6 pcs)", price: 530, desc: "Classic crispy fried chicken pieces.", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ce1?q=80&w=800&auto=format&fit=crop" },
            { id: "f8", name: "Seasoned Potato Wedges", price: 110, desc: "Thick cut seasoned wedges.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop" },
            { id: "f9", name: "Classic French Fries", price: 99, desc: "Golden salted crispy fries.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        name: "Cake & Pastry",
        items: [
            { id: "c1", name: "Chocolate Chip Cookie", price: 70, desc: "Classic chunky chocolate chip cookie.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop" },
            { id: "c2", name: "Red Velvet Cookie", price: 90, desc: "Soft baked red velvet with white chips.", image: "https://images.unsplash.com/photo-1618411640018-972400a01457?q=80&w=800&auto=format&fit=crop" },
            { id: "c3", name: "Chocolate Fudge Brownie", price: 90, desc: "Rich and gooey chocolate fudge.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" },
            { id: "c4", name: "Double Chocolate Brownie", price: 100, desc: "Extra chocolatey indulgent brownie.", image: "https://images.unsplash.com/photo-1599818815159-24ecbba9d8db?q=80&w=800&auto=format&fit=crop" },
            { id: "c5", name: "Red Velvet Brownie", price: 110, desc: "Swirled red velvet and cream cheese.", image: "https://images.unsplash.com/photo-1586788224331-947f68671b56?q=80&w=800&auto=format&fit=crop" },
            { id: "c6", name: "Blondie (White Chocolate Brownie)", price: 90, desc: "Sweet vanilla and white chocolate.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop" },
            { id: "c7", name: "Chocolate Cheesecake", price: 180, desc: "Creamy cheesecake with chocolate flavor.", image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=800&auto=format&fit=crop" },
            { id: "c8", name: "Blueberry Cheesecake", price: 190, desc: "Classic cheesecake topped with blueberries.", image: "https://images.unsplash.com/photo-1533134242443-d4fd01530262?q=80&w=800&auto=format&fit=crop", isFeatured: true },
            { id: "c9", name: "Butterscotch Cake", price: 150, desc: "Sweet caramel butterscotch layers.", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop" },
            { id: "c10", name: "Chocolate Mocha Cake", price: 150, desc: "Coffee and chocolate infused cake.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" },
            { id: "c11", name: "Chocolate Loaded Cake", price: 160, desc: "Ultimate chocolate lover's dream.", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop" },
            { id: "c12", name: "Lemon Cake", price: 90, desc: "Zesty and refreshing lemon pound cake.", image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        name: "Coffee (Hot)",
        items: [
            { id: "h1", name: "Classic Espresso", price: 120, desc: "A strong, rich single shot.", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0fd24?q=80&w=800&auto=format&fit=crop" },
            { id: "h2", name: "Double Shot Espresso", price: 180, desc: "Double the strength, double the kick.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" },
            { id: "h3", name: "Artisan Americano", price: 160, desc: "Smooth espresso diluted with hot water. (Extra shot +50 TK)", image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=800&auto=format&fit=crop" },
            { id: "h4", name: "Velvet Cappuccino", price: 220, desc: "Espresso with thick steamed milk foam.", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop" },
            { id: "h5", name: "Silk Milk Latte", price: 240, desc: "Creamy espresso with steamed milk.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop" },
            { id: "h6", name: "Latte Flavour Infusion", price: 310, desc: "Vanilla / Hazelnut / Caramel.", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
            { id: "h7", name: "Signature Mocha", price: 260, desc: "Espresso layered with rich chocolate.", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop", isFeatured: true },
            { id: "h8", name: "Italian Macchiato", price: 175, desc: "Espresso marked with a dash of foam.", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop" },
            { id: "h9", name: "Belgian Hot Chocolate", price: 240, desc: "Pure decadent warm Belgian chocolate.", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        name: "Coffee (Iced)",
        items: [
            { id: "i1", name: "Artisan Americano", price: 160, desc: "Crisp cold espresso and water.", image: "https://images.unsplash.com/photo-1517701550927-30cfcb64d4b1?q=80&w=800&auto=format&fit=crop" },
            { id: "i2", name: "Velvet Cappuccino", price: 240, desc: "Iced frothy cappuccino.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop" },
            { id: "i3", name: "Silk Milk Latte", price: 260, desc: "Chilled milk and espresso over ice.", image: "https://images.unsplash.com/photo-1499961024600-ad094db305cc?q=80&w=800&auto=format&fit=crop" },
            { id: "i4", name: "Latte Flavour Infusion", price: 330, desc: "Vanilla / Hazelnut / Caramel iced latte.", image: "https://images.unsplash.com/photo-1461023058943-0708e52238eb?q=80&w=800&auto=format&fit=crop" },
            { id: "i5", name: "Signature Mocha", price: 280, desc: "Iced chocolate espresso beverage.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
            { id: "i6", name: "Italian Macchiato", price: 195, desc: "Chilled macchiato.", image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=800&auto=format&fit=crop" },
            { id: "i7", name: "Classic Chocolate Cold Coffee", price: 290, desc: "Rich cold coffee. (Whipped cream +30 TK)", image: "https://images.unsplash.com/photo-1557006021-b85faa2caeda?q=80&w=800&auto=format&fit=crop", isFeatured: true }
        ]
    },
    {
        name: "Frappé & Shakes",
        items: [
            { id: "fr1", name: "Caramel Frappé", price: 290, desc: "Ice blended caramel goodness.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
            { id: "fr2", name: "Hazelnut Frappé", price: 290, desc: "Nutty ice blended beverage.", image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=800&auto=format&fit=crop" },
            { id: "fr3", name: "Mocha Blast Frappé", price: 280, desc: "Chocolatey coffee ice blend.", image: "https://images.unsplash.com/photo-1579954115545-a957115553ce?q=80&w=800&auto=format&fit=crop" },
            { id: "fr4", name: "Vanilla Frappé", price: 290, desc: "Smooth vanilla ice blend.", image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=800&auto=format&fit=crop" },
            { id: "ms1", name: "Chocolate Indulgence Shake", price: 290, desc: "Thick premium chocolate milkshake.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
            { id: "ms2", name: "Strawberry Bliss Shake", price: 250, desc: "Sweet strawberry creamy shake.", image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop", isFeatured: true },
            { id: "ms3", name: "Madagascar Vanilla Shake", price: 220, desc: "Classic rich vanilla shake.", image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=800&auto=format&fit=crop" },
            { id: "ms4", name: "Fresh Mango Cream Shake", price: 290, desc: "Seasonal mango blended with cream.", image: "https://images.unsplash.com/photo-1546889814-1e0e1bba8f46?q=80&w=800&auto=format&fit=crop" },
            { id: "ms5", name: "Oreo Crumble Shake", price: 260, desc: "Crushed Oreos in a thick vanilla base.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
            { id: "ms6", name: "Banana Smooth Shake", price: 240, desc: "Healthy banana milkshake.", image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        name: "Refreshments",
        items: [
            { id: "l1", name: "Sweet Lassi", price: 170, desc: "Traditional sweet yogurt drink.", image: "https://images.unsplash.com/photo-1575591321743-34e85741ea3d?q=80&w=800&auto=format&fit=crop" },
            { id: "l2", name: "Salted Lassi", price: 170, desc: "Savory salted yogurt drink.", image: "https://images.unsplash.com/photo-1575591321743-34e85741ea3d?q=80&w=800&auto=format&fit=crop" },
            { id: "l3", name: "Mango Lassi (Regular)", price: 190, desc: "Mango infused sweet lassi.", image: "https://images.unsplash.com/photo-1546889814-1e0e1bba8f46?q=80&w=800&auto=format&fit=crop" },
            { id: "m1", name: "Virgin Mojito Classic", price: 210, desc: "Mint and lime refreshing cooler.", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop" },
            { id: "m2", name: "Lemon Mint Refresher", price: 140, desc: "Zesty lemon and crushed mint.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" },
            { id: "m3", name: "Fresh Lemonade", price: 90, desc: "Classic sweet and sour lemonade.", image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=800&auto=format&fit=crop" },
            { id: "m4", name: "Blue Curacao Splash", price: 230, desc: "Vibrant tropical blue cooler.", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop" },
            { id: "j1", name: "Fresh Orange Press", price: 250, desc: "100% pure squeezed orange juice.", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop" },
            { id: "j2", name: "Watermelon Cooler", price: 260, desc: "Refreshing watermelon juice.", image: "https://images.unsplash.com/photo-1595981267035-7b04d84b50ad?q=80&w=800&auto=format&fit=crop" },
            { id: "t1", name: "House Special Masala Milk Tea", price: 90, desc: "Spiced Indian style milk tea.", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=800&auto=format&fit=crop" },
            { id: "t2", name: "Pure Green Tea", price: 55, desc: "Antioxidant rich hot green tea.", image: "https://images.unsplash.com/photo-1627490022138-f9b1cc709971?q=80&w=800&auto=format&fit=crop" },
            { id: "t3", name: "Iced Lemon Tea", price: 110, desc: "Chilled black tea with fresh lemon.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop" }
        ]
    }
];

// App State
let cart = JSON.parse(localStorage.getItem('elegance_cart')) || [];
let currentTable = null;
const whatsappNumber = "8801913788799";

const defaultReviews = [
    { name: "A. Rahman", stars: 5, text: "The best coffee in Jashore. The ambiance is incredibly peaceful, perfect for reading.", date: new Date().getTime() },
    { name: "S. Islam", stars: 5, text: "Amazing interior and the Grilled Chicken Steak Burger is a must-try!", date: new Date().getTime() - 86400000 },
    { name: "K. Hossain", stars: 5, text: "Very easy to order from the table. Premium feel all around.", date: new Date().getTime() - 172800000 }
];
let siteReviews = JSON.parse(localStorage.getItem('elegance_reviews')) || defaultReviews;

function saveCart() {
    localStorage.setItem('elegance_cart', JSON.stringify(cart));
}

function saveReviews() {
    localStorage.setItem('elegance_reviews', JSON.stringify(siteReviews));
}

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const categoryFilters = document.getElementById('category-filters');
const cartBtn = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');

const modalsHTML = `
    <!-- Checkout Modal -->
    <div class="custom-modal-overlay" id="checkout-modal">
        <div class="custom-modal-content">
            <span class="custom-modal-close" id="close-checkout-modal">&times;</span>
            <h2 style="color: var(--color-primary); margin-bottom: 20px;">Complete Your Order</h2>
            <form id="checkout-form">
                <div class="form-group">
                    <label for="customer-name">Your Name *</label>
                    <input type="text" id="customer-name" required placeholder="Enter your name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="order-type">Dining Preference *</label>
                    <select id="order-type" required class="form-control">
                        <option value="Dine-in">Dine-in</option>
                        <option value="Takeaway">Takeaway</option>
                    </select>
                </div>
                <div class="form-group" id="table-num-group">
                    <label for="table-number">Table Number (Optional)</label>
                    <input type="text" id="table-number" placeholder="e.g. 5" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary btn-full" style="margin-top: 20px;">Confirm & Send via WhatsApp</button>
            </form>
        </div>
    </div>

    <!-- Thank You Modal -->
    <div class="custom-modal-overlay" id="thankyou-modal">
        <div class="custom-modal-content text-center">
            <span class="custom-modal-close" id="close-thankyou-modal">&times;</span>
            <div style="font-size: 4rem; color: var(--color-primary); margin-bottom: 1rem;">✓</div>
            <h2 style="color: var(--color-primary); margin-bottom: 10px;">Thank You!</h2>
            <p style="color: var(--color-text-muted); margin-bottom: 20px;">Your order details have been prepared for WhatsApp.</p>
            <button id="btn-close-thankyou" class="btn btn-secondary mt-3">Close</button>
        </div>
    </div>


    <!-- Review Modal -->
    <div class="custom-modal-overlay" id="review-modal">
        <div class="custom-modal-content">
            <span class="custom-modal-close" id="close-review-modal">&times;</span>
            <h2 style="color: var(--color-primary); margin-bottom: 20px;">Leave a Review</h2>
            <form id="review-form">
                <div class="form-group">
                    <label for="review-name">Your Name *</label>
                    <input type="text" id="review-name" required placeholder="Enter your name" class="form-control">
                </div>
                
                <div class="form-group">
                    <label>Overall Rating *</label>
                    <div class="star-rating" id="star-rating">
                        <span data-value="1">★</span>
                        <span data-value="2">★</span>
                        <span data-value="3">★</span>
                        <span data-value="4">★</span>
                        <span data-value="5">★</span>
                    </div>
                    <input type="hidden" id="review-stars" required>
                </div>

                <div class="form-group">
                    <label for="review-service">How was the Service? *</label>
                    <select id="review-service" required class="form-control">
                        <option value="" disabled selected>Select an option</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="review-food">How was the Food Quality? *</label>
                    <select id="review-food" required class="form-control">
                        <option value="" disabled selected>Select an option</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Average">Average</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="review-text">Comments (Optional)</label>
                    <textarea id="review-text" class="form-control" rows="3" placeholder="Tell us more about your experience..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-full" style="margin-top: 10px;">Submit Review</button>
            </form>
        </div>
    </div>

    <!-- Google Review Prompt Modal -->
    <div class="custom-modal-overlay" id="google-review-modal">
        <div class="custom-modal-content text-center">
            <span class="custom-modal-close" id="close-google-modal">&times;</span>
            <div style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">★★★★★</div>
            <h2 style="color: var(--color-primary); margin-bottom: 10px;">We're Thrilled!</h2>
            <p style="color: var(--color-text-muted); margin-bottom: 20px;">We are so glad you loved your experience. As a local business, it would mean the world to us if you could share this on Google Maps!</p>
            <a href="https://maps.app.goo.gl/Jvr8mavT5q2PQpJ28" target="_blank" class="btn btn-primary btn-full" id="btn-go-google">Post on Google Maps</a>
            <button id="btn-skip-google" class="btn btn-secondary btn-full mt-3" type="button">Maybe Later</button>
        </div>
    </div>

    <!-- Feedback Thank You Modal -->
    <div class="custom-modal-overlay" id="feedback-thankyou-modal">
        <div class="custom-modal-content text-center">
            <span class="custom-modal-close" id="close-feedback-modal">&times;</span>
            <div style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">🙏</div>
            <h2 style="color: var(--color-primary); margin-bottom: 10px;">Thank You</h2>
            <p style="color: var(--color-text-muted); margin-bottom: 20px;">Your feedback is incredibly valuable. We will share this with our team and work hard to improve.</p>
            <button id="btn-close-feedback" class="btn btn-secondary mt-3" type="button">Close</button>
        </div>
    </div>
`;

// Initialize
function init() {
    checkTableNumber();
    
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
    
    if (document.getElementById('category-filters')) {
        renderCategories();
        renderMenu("All");
    }
    
    if (document.getElementById('featured-menu-grid')) {
        renderFeaturedMenu();
    }
    
    if (document.getElementById('reviews-grid')) {
        renderReviews();
    }
    
    updateCartUI();
    setupEventListeners();
    
    if (document.getElementById('lightbox')) {
        setupLightbox();
    }
}

function checkTableNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const table = urlParams.get('table');
    
    if (table) {
        currentTable = table;
        document.getElementById('table-badge').classList.remove('hidden');
        document.getElementById('table-number-display').innerText = table;
        
        document.getElementById('cart-table-info').classList.remove('hidden');
        document.getElementById('cart-table-number').innerText = table;
    }
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Sort by newest first, take all
    const sorted = [...siteReviews].sort((a, b) => b.date - a.date);
    
    function makeCard(rev) {
        const starsHtml = '★'.repeat(rev.stars) + '☆'.repeat(5 - rev.stars);
        let textHtml = '';
        if (rev.text && rev.text.trim() !== '') {
            textHtml = `<p>"${rev.text}"</p>`;
        }
        let subHtml = '';
        if (rev.service && rev.food) {
            subHtml = `<div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 10px;">\u{1F37D} ${rev.service} service &nbsp;|&nbsp; \u{1F35C} ${rev.food} food</div>`;
        }
        const el = document.createElement('div');
        el.className = 'review-card';
        el.setAttribute('aria-hidden', 'false');
        el.innerHTML = `
            <div class="stars">${starsHtml}</div>
            ${subHtml}
            ${textHtml}
            <strong>— ${rev.name}</strong>
        `;
        return el;
    }

    // Render original set + duplicate for seamless loop
    sorted.forEach(rev => grid.appendChild(makeCard(rev)));
    sorted.forEach(rev => {
        const clone = makeCard(rev);
        clone.setAttribute('aria-hidden', 'true');
        grid.appendChild(clone);
    });
}


function renderCategories() {
    // Add "All" filter
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.innerText = 'All';
    allBtn.onclick = () => {
        setActiveFilter(allBtn);
        renderMenu("All");
    };
    categoryFilters.appendChild(allBtn);

    menuData.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.innerText = cat.name;
        btn.onclick = () => {
            setActiveFilter(btn);
            renderMenu(cat.name);
        };
        categoryFilters.appendChild(btn);
    });
}

function setActiveFilter(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function renderMenu(categoryName) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';
    
    menuData.forEach(cat => {
        if (categoryName === "All" || cat.name === categoryName) {
            cat.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-card-img" onerror="this.src='Elegant Restaurant Interior Branding.png'">
                    <div class="menu-card-content">
                        <div class="menu-card-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <span class="menu-item-price">৳${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.desc}</p>
                        <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price})">Add to Cart</button>
                    </div>
                `;
                menuGrid.appendChild(card);
            });
        }
    });
}

function renderFeaturedMenu() {
    const featuredGrid = document.getElementById('featured-menu-grid');
    if (!featuredGrid) return;
    featuredGrid.innerHTML = '';
    
    menuData.forEach(cat => {
        cat.items.forEach(item => {
            if (item.isFeatured) {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-card-img" onerror="this.src='Elegant Restaurant Interior Branding.png'">
                    <div class="menu-card-content">
                        <div class="menu-card-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <span class="menu-item-price">৳${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.desc}</p>
                        <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price})">Add to Cart</button>
                    </div>
                `;
                featuredGrid.appendChild(card);
            }
        });
    });
}

// Cart Logic
window.addToCart = function(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ id, name, price, qty: 1 });
    }
    
    saveCart();
    updateCartUI();
    
    // Animate button feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added ✓";
    btn.style.backgroundColor = "var(--color-primary)";
    btn.style.color = "#000";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
        btn.style.color = "";
    }, 1000);
}

function updateCartQty(id, change) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart[itemIndex].qty += change;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.innerText = totalItems;
    
    // Update items list
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
        checkoutBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">৳${item.price} × ${item.qty} = ৳${itemTotal}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    cartTotalEl.innerText = '৳' + total;
}

// WhatsApp Integration & Checkout
function submitOrderWithDetails() {
    const name = document.getElementById('customer-name').value;
    const type = document.getElementById('order-type').value;
    const tableNum = document.getElementById('table-number').value;

    let text = "🔔 *NEW ORDER*\n";
    text += "🏪 *ELEGANCE RESTAURANT AND PARTY CENTER*\n";
    text += `👤 *Name:* ${name}\n`;
    text += `🛍 *Type:* ${type}\n`;
    
    if (tableNum) {
        text += `🪑 *Table:* ${tableNum}\n`;
    }
    
    text += "-------------------------\n";
    
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        text += `▪ ${item.name} × ${item.qty} — ৳${itemTotal}\n`;
    });
    
    text += "-------------------------\n";
    text += `💰 *TOTAL: ৳${total}*\n\n`;
    text += "Please prepare this order.";
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    // Close checkout modal
    document.getElementById('checkout-modal').classList.remove('active');
    
    // Open Whatsapp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close sidebar
    cart = [];
    saveCart();
    updateCartUI();
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
    
    // Show thank you modal
    setTimeout(() => {
        document.getElementById('thankyou-modal').classList.add('active');
    }, 500);
}

// Sidebar Toggle
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

function setupEventListeners() {
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        document.getElementById('checkout-modal').classList.add('active');
        if (currentTable) {
            document.getElementById('table-number').value = currentTable;
        }
    });

    document.getElementById('close-checkout-modal').addEventListener('click', () => {
        document.getElementById('checkout-modal').classList.remove('active');
    });

    document.getElementById('close-thankyou-modal').addEventListener('click', () => {
        document.getElementById('thankyou-modal').classList.remove('active');
    });

    document.getElementById('btn-close-thankyou').addEventListener('click', () => {
        document.getElementById('thankyou-modal').classList.remove('active');
    });

    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrderWithDetails();
    });
    
    // Review Event Listeners
    const starEls = document.querySelectorAll('#star-rating span');
    const starsInput = document.getElementById('review-stars');
    
    if (starEls.length > 0) {
        starEls.forEach(star => {
            star.addEventListener('mouseover', function() {
                const val = this.getAttribute('data-value');
                starEls.forEach(s => {
                    if (s.getAttribute('data-value') <= val) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
            star.addEventListener('mouseout', function() {
                starEls.forEach(s => s.classList.remove('hover'));
            });
            star.addEventListener('click', function() {
                const val = this.getAttribute('data-value');
                starsInput.value = val;
                starEls.forEach(s => {
                    if (s.getAttribute('data-value') <= val) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
    }

    const btnLeaveReview = document.getElementById('btn-leave-review');
    if (btnLeaveReview) {
        btnLeaveReview.addEventListener('click', () => {
            document.getElementById('review-modal').classList.add('active');
        });
    }

    document.getElementById('close-review-modal')?.addEventListener('click', () => {
        document.getElementById('review-modal').classList.remove('active');
    });
    document.getElementById('close-google-modal')?.addEventListener('click', () => {
        document.getElementById('google-review-modal').classList.remove('active');
    });
    document.getElementById('close-feedback-modal')?.addEventListener('click', () => {
        document.getElementById('feedback-thankyou-modal').classList.remove('active');
    });
    document.getElementById('btn-skip-google')?.addEventListener('click', () => {
        document.getElementById('google-review-modal').classList.remove('active');
    });
    document.getElementById('btn-close-feedback')?.addEventListener('click', () => {
        document.getElementById('feedback-thankyou-modal').classList.remove('active');
    });
    document.getElementById('btn-go-google')?.addEventListener('click', () => {
        document.getElementById('google-review-modal').classList.remove('active');
    });

    document.getElementById('review-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const stars = parseInt(starsInput.value);
        if (!stars) {
            alert('Please select a star rating.');
            return;
        }
        
        const name = document.getElementById('review-name').value;
        const service = document.getElementById('review-service').value;
        const food = document.getElementById('review-food').value;
        const text = document.getElementById('review-text').value;
        
        siteReviews.unshift({
            name, stars, service, food, text, date: new Date().getTime()
        });
        saveReviews();
        if (document.getElementById('reviews-grid')) {
            renderReviews();
        }
        
        document.getElementById('review-modal').classList.remove('active');
        this.reset();
        starsInput.value = '';
        starEls.forEach(s => s.classList.remove('active'));
        
        if (stars >= 4) {
            document.getElementById('google-review-modal').classList.add('active');
        } else {
            document.getElementById('feedback-thankyou-modal').classList.add('active');
        }
    });

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
}

// Lightbox
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = item.src;
        });
    });
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
}

// Start
document.addEventListener('DOMContentLoaded', init);

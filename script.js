/**
 * Shopper Management System - JavaScript
 * 
 * Task Assignments:
 * - Jane Doe: Form handling and shopper addition (lines 10-80)
 * - Mike Johnson: CRUD operations, search, and shopper display (lines 82-200)
 * - Sarah Williams: Statistics calculation and updates (lines 202-250)
 * - John Smith: Initial setup and data structure (lines 1-8)
 */

// Data Storage - John Smith
let shoppers = [];
let editingId = null;

// Load data from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadShoppers();
    displayShoppers();
    updateStatistics();
    setupEventListeners();
});

// Setup Event Listeners - John Smith
function setupEventListeners() {
    document.getElementById('shopperForm').addEventListener('submit', handleFormSubmit);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
}

// Form Handling - Jane Doe
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('shopperName').value.trim();
    const email = document.getElementById('shopperEmail').value.trim();
    const membershipType = document.getElementById('membershipType').value;
    
    // Validate form inputs
    if (!name || !email || !membershipType) {
        alert('Please fill in all fields');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (editingId !== null) {
        // Update existing shopper
        updateShopper(editingId, name, email, membershipType);
        editingId = null;
    } else {
        // Add new shopper
        addShopper(name, email, membershipType);
    }
    
    // Reset form
    document.getElementById('shopperForm').reset();
    document.querySelector('.btn-primary').textContent = 'Add Shopper';
}

// Email Validation - Jane Doe
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add Shopper Function - Jane Doe
function addShopper(name, email, membershipType) {
    const shopper = {
        id: Date.now(),
        name: name,
        email: email,
        membershipType: membershipType,
        dateAdded: new Date().toISOString()
    };
    
    shoppers.push(shopper);
    saveShoppers();
    displayShoppers();
    updateStatistics();
    
    // Show success message
    showNotification('Shopper added successfully!', 'success');
}

// CRUD Operations - Mike Johnson

// Display Shoppers Function
function displayShoppers(shoppersToDisplay = shoppers) {
    const shopperList = document.getElementById('shopperList');
    
    if (shoppersToDisplay.length === 0) {
        shopperList.innerHTML = `
            <div class="empty-state">
                <p>No shoppers found. Add your first shopper using the form above!</p>
            </div>
        `;
        return;
    }
    
    shopperList.innerHTML = shoppersToDisplay.map(shopper => `
        <div class="shopper-card" data-id="${shopper.id}">
            <div class="shopper-info">
                <h3>${shopper.name}</h3>
                <p>Email: ${shopper.email}</p>
                <p>
                    <span class="membership-badge membership-${shopper.membershipType.toLowerCase()}">
                        ${shopper.membershipType} Member
                    </span>
                </p>
                <p style="font-size: 0.85rem; color: #999;">
                    Added: ${new Date(shopper.dateAdded).toLocaleDateString()}
                </p>
            </div>
            <div class="shopper-actions">
                <button class="btn btn-edit" onclick="editShopper(${shopper.id})">Edit</button>
                <button class="btn btn-delete" onclick="deleteShopper(${shopper.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Edit Shopper Function - Mike Johnson
function editShopper(id) {
    const shopper = shoppers.find(s => s.id === id);
    if (!shopper) return;
    
    document.getElementById('shopperName').value = shopper.name;
    document.getElementById('shopperEmail').value = shopper.email;
    document.getElementById('membershipType').value = shopper.membershipType;
    
    editingId = id;
    document.querySelector('.btn-primary').textContent = 'Update Shopper';
    
    // Scroll to form
    document.getElementById('addShopperSection').scrollIntoView({ behavior: 'smooth' });
}

// Update Shopper Function - Mike Johnson
function updateShopper(id, name, email, membershipType) {
    const index = shoppers.findIndex(s => s.id === id);
    if (index !== -1) {
        shoppers[index] = {
            ...shoppers[index],
            name: name,
            email: email,
            membershipType: membershipType
        };
        saveShoppers();
        displayShoppers();
        updateStatistics();
        showNotification('Shopper updated successfully!', 'success');
    }
}

// Delete Shopper Function - Mike Johnson
function deleteShopper(id) {
    if (confirm('Are you sure you want to delete this shopper?')) {
        shoppers = shoppers.filter(s => s.id !== id);
        saveShoppers();
        displayShoppers();
        updateStatistics();
        showNotification('Shopper deleted successfully!', 'success');
    }
}

// Search Functionality - Mike Johnson
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayShoppers();
        return;
    }
    
    const filteredShoppers = shoppers.filter(shopper => 
        shopper.name.toLowerCase().includes(searchTerm) ||
        shopper.email.toLowerCase().includes(searchTerm) ||
        shopper.membershipType.toLowerCase().includes(searchTerm)
    );
    
    displayShoppers(filteredShoppers);
}

// Statistics Functions - Sarah Williams

// Update Statistics
function updateStatistics() {
    const total = shoppers.length;
    const basic = shoppers.filter(s => s.membershipType === 'Basic').length;
    const premium = shoppers.filter(s => s.membershipType === 'Premium').length;
    const vip = shoppers.filter(s => s.membershipType === 'VIP').length;
    
    document.getElementById('totalShoppers').textContent = total;
    document.getElementById('basicMembers').textContent = basic;
    document.getElementById('premiumMembers').textContent = premium;
    document.getElementById('vipMembers').textContent = vip;
    
    // Add animation effect
    animateStatCards();
}

// Animate Statistics Cards - Sarah Williams
function animateStatCards() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        stat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            stat.style.transform = 'scale(1)';
        }, 200);
    });
}

// Local Storage Functions - John Smith

// Save shoppers to localStorage
function saveShoppers() {
    localStorage.setItem('shoppers', JSON.stringify(shoppers));
}

// Load shoppers from localStorage
function loadShoppers() {
    const stored = localStorage.getItem('shoppers');
    if (stored) {
        shoppers = JSON.parse(stored);
    } else {
        // Initialize with sample data
        shoppers = [
            {
                id: 1,
                name: 'Alice Johnson',
                email: 'alice.johnson@example.com',
                membershipType: 'Premium',
                dateAdded: new Date().toISOString()
            },
            {
                id: 2,
                name: 'Bob Smith',
                email: 'bob.smith@example.com',
                membershipType: 'Basic',
                dateAdded: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Carol Williams',
                email: 'carol.williams@example.com',
                membershipType: 'VIP',
                dateAdded: new Date().toISOString()
            }
        ];
        saveShoppers();
    }
}

// Notification System - Sarah Williams
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .stat-number {
        transition: transform 0.2s ease;
    }
`;
document.head.appendChild(style);

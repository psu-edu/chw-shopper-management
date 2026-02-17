# Shopper Management System

A web-based application for managing shopper information including names, email addresses, and membership status. Built as a collaborative group project for IST 256 - Web Development.

## Project Overview

This application demonstrates a complete CRUD (Create, Read, Update, Delete) system for managing shopper data. It features a modern, responsive design with real-time statistics and search functionality.

## Team Members

- **John Smith** - Project structure, HTML layout, data persistence
- **Jane Doe** - Form development and validation
- **Mike Johnson** - CRUD operations and search functionality  
- **Sarah Williams** - CSS styling, statistics dashboard, and responsive design

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for detailed task assignments and contributions.

## Features

### 1. Add Shopper (Developed by Jane Doe)
- User-friendly form for adding new shoppers
- Client-side validation for all fields
- Email format validation
- Membership type selection (Basic, Premium, VIP)

### 2. Shopper Directory (Developed by Mike Johnson)
- Dynamic display of all shoppers in card format
- Edit functionality to update shopper information
- Delete functionality with confirmation dialog
- Search capability across name, email, and membership type
- Displays date added for each shopper

### 3. Statistics Dashboard (Developed by Sarah Williams)
- Real-time statistics showing:
  - Total number of shoppers
  - Count by membership type (Basic, Premium, VIP)
- Animated stat cards with hover effects
- Auto-updates with data changes

### 4. Professional Design (Developed by Sarah Williams)
- Modern gradient background
- Responsive layout for all screen sizes
- Color-coded membership badges
- Smooth transitions and animations
- Notification system for user actions

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling, flexbox, grid, and animations
- **JavaScript (ES6)** - Dynamic functionality and DOM manipulation
- **LocalStorage API** - Client-side data persistence

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/psu-edu/chw-shopper-management.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chw-shopper-management
   ```

3. Open `index.html` in a web browser:
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server installed)
     npx http-server
     ```

4. Access the application at `http://localhost:8000` (if using a local server)

## Usage Instructions

### Adding a Shopper
1. Fill in the "Add New Shopper" form with:
   - Shopper Name
   - Email Address
   - Membership Type (Basic, Premium, or VIP)
2. Click "Add Shopper" button
3. The shopper will appear in the Shopper Directory below

### Editing a Shopper
1. Click the "Edit" button on any shopper card
2. The form will populate with the shopper's current information
3. Modify the desired fields
4. Click "Update Shopper" to save changes

### Deleting a Shopper
1. Click the "Delete" button on any shopper card
2. Confirm the deletion in the dialog box
3. The shopper will be removed from the directory

### Searching Shoppers
1. Type in the search box above the Shopper Directory
2. Results will filter in real-time based on:
   - Shopper name
   - Email address
   - Membership type

### Viewing Statistics
- Statistics are displayed at the bottom of the page
- Automatically update when shoppers are added, edited, or deleted
- Shows total count and breakdown by membership type

## Project Structure

```
chw-shopper-management/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
├── CONTRIBUTORS.md     # Detailed contribution breakdown
├── README.md          # This file
└── screenshots/       # Application screenshots
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Data Persistence

The application uses browser LocalStorage to persist shopper data. Data will remain available even after closing the browser, as long as the browser cache is not cleared.

### Sample Data

The application includes three sample shoppers on first load:
- Alice Johnson (Premium member)
- Bob Smith (Basic member)
- Carol Williams (VIP member)

You can delete these and add your own shoppers as needed.

## Screenshots

Screenshots of the application can be found in the `screenshots/` directory, showing:
- Homepage with all sections
- Add Shopper form
- Shopper Directory with sample data
- Statistics Dashboard
- Mobile responsive views

## Contribution Verification

To verify that all team members contributed:

1. **Check the code files** - Each section includes contributor comments
2. **Review CONTRIBUTORS.md** - Detailed breakdown of tasks and code lines
3. **View the live application** - "Developed by" badges on each section
4. **Check the footer** - Lists all contributions
5. **Git history** - Run `git log --all --graph` to see commit history

## Academic Integrity

This project was completed as a group assignment for IST 256. All code is original work by the team members listed above. External libraries and frameworks were not used to ensure learning objectives were met.

## License

This project is created for educational purposes as part of Penn State University coursework.

## Contact

For questions or issues, contact any team member:
- John Smith: john.smith@psu.edu
- Jane Doe: jane.doe@psu.edu  
- Mike Johnson: mike.johnson@psu.edu
- Sarah Williams: sarah.williams@psu.edu

---

**Course:** IST 256 - Web Development  
**Semester:** Spring 2026  
**Institution:** Penn State University

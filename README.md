# Investment Portfolio Management Web Application

## Project Overview

This project aims to develop a user-friendly web application that provides comprehensive tools to help users manage their investment portfolios. It offers real-time market data, portfolio tracking, market analysis, and educational resources, streamlining the investment process for both novice and experienced investors.

## Outcomes

- Allow users to create and manage their investment portfolios.
- Provide real-time stock market data for users to track stock performance.
- Enable users to analyze market trends and make informed investment decisions.
- Enhance user engagement with educational resources and news.
- Provide a seamless and intuitive user interface for portfolio and market management.

## Tech Stack

### Frontend:

- React JS
- React Router
- Axios (for API requests)
- Tailwind CSS

### Backend:

- Spring Boot
- Spring Security (JWT Authentication)
- Spring Data MongoDB
- Lombok (for reducing boilerplate code)

### Database:

- MongoDB

1. **User Authentication and Registration**

   - Implement user registration functionality.
   - Develop user login mechanism.
   - Integrate email verification and password reset features.

2. **Portfolio Management Interface**

   - Enable users to create, update, and manage their investment portfolios.

3. **Stock Market Data and Visualization**

   - Provide real-time stock market data.
   - Visualize stock performance with interactive charts.

4. **Budget Management**

   - Allow users to track and manage their investment budgets.


5. **Learning Resources**

 Provide educational content on investing and financial literacy.

6. **Dashboard**

   - Develop a user-friendly dashboard for managing all portfolio-related activities.


## Installation and Setup

### Prerequisites:

- Node.js and npm installed
- Java JDK 17+
- MongoDB installed and running

### Setup Backend

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
   ```
2. Configure MongoDB connection in `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/your-database
   ```
3. Build and run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Setup Frontend

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Running the Application

1. Start MongoDB if it's not running:
   ```sh
   mongod --dbpath /your/mongodb/path
   ```
2. Start the Spring Boot backend (`mvn spring-boot:run`)
3. Start the React frontend (`npm start`)
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please create a pull request with detailed changes.

## Contact

For any queries, feel free to reach out at [your-email@example.com](mailto\:your-email@example.com).


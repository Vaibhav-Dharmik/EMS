```markdown
# Full Stack EMS Application
```

This repository contains the **EMS** (Employee Management System) Full Stack application with the following components:

- **`ems-backend`**: A REST API built using **Java Spring Boot**.
- **`ems-frontend`**: A front-end application built using **React** with **Vite** as the build tool.

## Project Structure

```
ems-backend/
  ├── src/
  ├── pom.xml
  └── ...

ems-frontend/
  ├── src/
  ├── vite.config.js
  └── ...
```

## Prerequisites

Before running the application, make sure you have the following installed:

- **Java 17** or higher (for the Spring Boot backend)
- **Node.js** (for the Vite/React frontend)
- **Maven** (for building the Spring Boot backend)
- **Git** (for cloning the repository)
- **Database** (e.g., MySQL, PostgreSQL) installed on your machine

## Database Setup

The application requires a database to store employee-related data. Follow the steps below to create a database named `ems`:

1. **Install Database (if not installed):**

   If you don't have a database management system (DBMS) installed, you can choose between options like:

   - **MySQL**: [MySQL Installation Guide](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
   - **PostgreSQL**: [PostgreSQL Installation Guide](https://www.postgresql.org/download/)

2. **Create the Database:**

   After installing your database, you can create a database named `ems`. The steps vary depending on the DBMS you are using.

   ### For MySQL:

   - Log into MySQL using the MySQL command-line client:

     ```bash
     mysql -u root -p
     ```

   - Create the database:

     ```sql
     CREATE DATABASE ems;
     ```

   - Exit MySQL:

     ```sql
     EXIT;
     ```

   ### For PostgreSQL:

   - Log into PostgreSQL using the `psql` command-line client:

     ```bash
     psql -U postgres
     ```

   - Create the database:

     ```sql
     CREATE DATABASE ems;
     ```

   - Exit PostgreSQL:

     ```sql
     \q
     ```

3. **Configure Database Connection:**

   After creating the database, configure your backend application to connect to it.

   - Open the `application.properties` file in the `ems-backend/src/main/resources` directory.

   - Modify the following properties to match your database credentials:

     ### For MySQL:

     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/ems
     spring.datasource.username=root
     spring.datasource.password=<your-database-password>
     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
     ```

     ### For PostgreSQL:

     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/ems
     spring.datasource.username=postgres
     spring.datasource.password=<your-database-password>
     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
     ```

   Make sure to replace `<your-database-password>` with your actual database password.

4. **Verify Database Connection:**

   Once the database is set up and the configuration is in place, you can verify the connection by running the Spring Boot application (see the instructions for running the backend below).

---

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Vaibhav-Dharmik/EMS.git
cd EMS
```

### 2. Backend Setup (`ems-backend`)

Navigate to the `ems-backend` directory to set up and run the backend.

1. **Install Dependencies:**

   Make sure all required dependencies are available. Run:

   ```bash
   cd ems-backend
   mvn install
   ```

2. **Run the Backend:**

   You can start the backend server by running the following command:

   ```bash
   mvn spring-boot:run
   ```

   This will start the backend server on `http://localhost:8080` by default. You can change the port by modifying the `application.properties` file in `src/main/resources`.

3. **Verify Backend:**

   Once the server is running, you can verify that the backend is functioning by visiting the following endpoint in your browser or using a tool like Postman:

   ```
   http://localhost:8080/api/employees
   ```

   You should receive a response like:

   ```json
   {
     "status": "OK"
   }
   ```

### 3. Frontend Setup (`ems-frontend`)

Navigate to the `ems-frontend` directory to set up and run the frontend.

1. **Install Dependencies:**

   In the `ems-frontend` directory, run the following command to install all the necessary dependencies:

   ```bash
   cd ems-frontend
   npm install
   ```

2. **Run the Frontend:**

   After installing the dependencies, run the following command to start the development server:

   ```bash
   npm run dev
   ```

   This will start the frontend application at `http://localhost:3000` by default.

3. **Verify Frontend:**

   Once the frontend server is running, you can access the application by visiting:

   ```
   http://localhost:3000
   ```

   You should be able to see the user interface and interact with the Employee Management System.

### 4. Connecting Frontend with Backend

By default, the frontend will make API calls to `http://localhost:8080` (backend server). Ensure that both backend and frontend are running simultaneously.

If you need to change the backend API URL, you can update the configuration in the React app (e.g., in `src/api.js` or wherever you define API URLs).

### 5. Running the Application (Both Backend and Frontend)

To run the full application (backend and frontend) simultaneously, follow these steps:

1. **Start the backend** by running the Spring Boot application:

   ```bash
   cd ems-backend
   mvn spring-boot:run
   ```

2. **Start the frontend** by running the Vite development server:

   ```bash
   cd ems-frontend
   npm run dev
   ```

Once both are running, navigate to `http://localhost:3000` in your browser to access the full application.

## Environment Variables

If needed, configure environment variables for your application. Below are some common variables:

- **Backend** (Spring Boot):

  - `SPRING_DATASOURCE_URL`: Database URL
  - `SPRING_DATASOURCE_USERNAME`: Database username
  - `SPRING_DATASOURCE_PASSWORD`: Database password

- **Frontend** (Vite):
  - `VITE_API_BASE_URL`: Base URL for API requests (default: `http://localhost:8080`)

You can create `.env` files in the respective directories for environment-specific configurations.

## Testing

### Backend Tests:

To run the backend tests, you can use Maven:

```bash
cd ems-backend
mvn test
```

### Frontend Tests:

To run the frontend tests, use:

```bash
cd ems-frontend
npm run test
```

## Building for Production

### Backend:

To build the backend for production:

```bash
cd ems-backend
mvn clean package
```

The `.jar` file will be created in the `target/` directory, which you can run with:

```bash
java -jar target/ems-backend-<version>.jar
```

### Frontend:

To build the frontend for production:

```bash
cd ems-frontend
npm run build
```

This will create a dist/ directory containing the production build of the frontend, which you can serve with a static server or deploy to a hosting platform.

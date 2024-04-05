# Date to Day Converter API

This is a simple Express.js API that converts a given date to its corresponding day of the week.

![image](https://github.com/vishaljha1710/Day-Finder/assets/77543816/5e95df35-7897-4827-bb50-06acea0af4ee)


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vishaljha1710/Day-Finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Starting the Server

To start the server, run the following command:

```bash
npm start
```

The server will start on `http://localhost:3000`.

### Endpoints

#### POST /

- **Description**: Converts the date sent in the request body to its corresponding day of the week.
- **Request Body**:

  ```json
  {
    "date": "DDMMYYYY"
  }
  ```

- **Example**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"date": "05042024"}' http://localhost:3000/
  ```

- **Response**:

  ```
  The day on date 05-04-2024 : Friday
  ```

#### GET /getDay

- **Description**: Converts the date sent in the query parameter to its corresponding day of the week.
- **Query Parameters**:

  ```
  ?date=DDMMYYYY
  ```

- **Example**:

  ```bash
  curl http://localhost:3000/getDay?date=05042024
  ```
  ![image](https://github.com/vishaljha1710/Day-Finder/assets/77543816/c403ad6a-1aa7-49bb-9f10-b12fccb731bd)

  ```live server
  please click on the link on right side of repo
  ```

- **Response**:

  ```
  The day on date 05-04-2024 : Friday
  ```
  ![image](https://github.com/vishaljha1710/Day-Finder/assets/77543816/2241f26c-8184-439b-9524-7ee113688f74)

## Date Format

The expected date format is `DDMMYYYY`.

## Error Handling

If the date format is invalid, the API will respond with:

```
Invalid Date Format
```

## Dependencies

- Express.js: Web application framework
- moment.js: Date and time manipulation library
- body-parser: Middleware to handle request bodies

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

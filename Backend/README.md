# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) for authentication.

### Required Data

- `fullname.firstname` (string): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string): The last name of the user. Must be at least 3 characters long.
- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 6 characters long.

### Status Codes

- `201 Created`: The user was successfully created. Returns the user object and a JWT token.
- `400 Bad Request`: The input data is invalid. Returns an array of validation errors.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (201 Created)

````json
{
  "user": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4z6wYFZx1Z1Z1Z1Z1Z1Z1Z1Z1Z1",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

#### Error (500 Internal Server Error)
```json
{
  "message": "An error occurred on the server"
}

````

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Description

This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) for authentication.

### Required Data

- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 6 characters long.

### Status Codes

- `200 OK`: The user was successfully logged in. Returns the user object and a JWT token.
- `400 Bad Request`: The input data is invalid. Returns an array of validation errors.
- `401 Unauthorized`: The email or password is incorrect. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "user": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4z6wYFZx1Z1Z1Z1Z1Z1",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

{
  "message": "Invalid email or password"
}
{
  "message": "An error occurred on the server"
}
```

# User Profile and Logout Endpoint Documentation

## Endpoint: `/users/profile`

### Description

This endpoint is used to get the profile of the authenticated user.

### Required Data

- No data required.

### Status Codes

- `200 OK`: The user profile was successfully retrieved. Returns the user object.
- `401 Unauthorized`: The user is not authenticated. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "user": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
{
  "message": "Unauthorized"
}
{
  "message": "An error occurred on the server"
}
```

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Description

This endpoint is used to log out the authenticated user. It invalidates the JWT token.

### Required Data

- No data required.

### Status Codes

- `200 OK`: The user was successfully logged out. Returns a success message.
- `401 Unauthorized`: The user is not authenticated. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "message": "Logout successfully"
}
```

# Captain Registration Endpoint Documentation

## Endpoint: `/captains/register`

### Description

This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JSON Web Token (JWT) for authentication.

### Required Data

- `fullname.firstname` (string): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string): The last name of the captain. Must be at least 3 characters long.
- `email` (string): The email address of the captain. Must be a valid email format.
- `password` (string): The password for the captain account. Must be at least 6 characters long.
- `vehicle.color` (string): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Status Codes

- `201 Created`: The captain was successfully created. Returns the captain object and a JWT token.
- `400 Bad Request`: The input data is invalid. Returns an array of validation errors.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (201 Created)

````json
{
  "captain": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4z6wYFZx1Z1Z1Z1Z1Z1Z1Z1Z1Z1",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Vehicle type must be one of car, motorcycle, or auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}

#### Error (500 Internal Server Error)
```json
{
  "message": "An error occurred on the server"
}
````

# Captain Login Endpoint Documentation

## Endpoint: `/captain/login`

### Description

This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns a JSON Web Token (JWT) for authentication.

### Required Data

- `email` (string): The email address of the captain. Must be a valid email format.
- `password` (string): The password for the captain account. Must be at least 6 characters long.

### Status Codes

- `200 OK`: The captain was successfully logged in. Returns the captain object and a JWT token.
- `400 Bad Request`: The input data is invalid or the credentials are incorrect. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "captain": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error (400 Bad Request)

```json
{
  "message": "User not found"
}
```

```json
{
  "message": "Invalid Password"
}
```

#### Error (500 Internal Server Error)

```json
{
  "message": "An error occurred on the server"
}
```

---

# Captain Profile Endpoint Documentation

## Endpoint: `/captain/profile`

### Description

This endpoint is used to retrieve the profile of the authenticated captain.

### Required Data

- No data required.

### Status Codes

- `200 OK`: The captain profile was successfully retrieved. Returns the captain object.
- `401 Unauthorized`: The captain is not authenticated. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "user": {
    "_id": "603d2149fc13ae1a00000000",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "socketId": null
  }
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Not authorized"
}
```

#### Error (500 Internal Server Error)

```json
{
  "message": "An error occurred on the server"
}
```

---

# Captain Logout Endpoint Documentation

## Endpoint: `/captain/logout`

### Description

This endpoint is used to log out the authenticated captain. It invalidates the JWT token.

### Required Data

- No data required.

### Status Codes

- `200 OK`: The captain was successfully logged out. Returns a success message.
- `401 Unauthorized`: The captain is not authenticated. Returns an error message.
- `500 Internal Server Error`: An error occurred on the server. Returns an error message.

### Example Response

#### Success (200 OK)

```json
{
  "message": "Logout successfully"
}
```

#### Error (401 Unauthorized)

```json
{
  "message": "Not authorized"
}
```

#### Error (500 Internal Server Error)

```json
{
  "message": "An error occurred on the server"
}
```

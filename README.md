# IBM technical assignment backend

This project is a one part of IBM technical assignment. 
It's purpose is to log user actions - Company Name and Company Stocks.

## Running an app

1. install nodejs
2. delete node modules if exists
3. npm install
4. npm start

## API Reference

#### Create company name log

```http
POST /company/name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Company name    |
| `date` | `string` | **Required**. Date when user searched this company name |

#### Create company stocks log

```http
POST /company/stocks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Company name    |
| `date` | `string` | **Required**. Date when user pressed on company name to check stocks |
| `stocks` | `array` | **Required**. Contains stocks data - time and open, high, low, close|


#### For more API reference check Swagger - /api-docs


## Authors

- [@Matas Paulius Drėgva](https://github.com/Jok3r182)


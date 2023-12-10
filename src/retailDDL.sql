CREATE TABLE customer (
    customer_ID     SERIAL PRIMARY KEY,
    first_name      VARCHAR(20),
    last_name       VARCHAR(20),
    email           VARCHAR(20),
    phone_num       NUMERIC(10,0)
);

CREATE TABLE services (
    service_ID      SERIAL PRIMARY KEY,
    department_name VARCHAR(15)
);

CREATE TABLE payment (
    pay_ID          SERIAL PRIMARY KEY,
    pay_date        VARCHAR(20),
    total_amount    NUMERIC(8,0)
);

CREATE TABLE product (
    product_ID      SERIAL PRIMARY KEY,
    p_name          VARCHAR(20),
    price           NUMERIC(4,0),
    stock_quant     NUMERIC(8,0)
);

CREATE TABLE orders (
    order_ID        SERIAL PRIMARY KEY,
    order_date      VARCHAR(20),
    total_amount    NUMERIC(8,0),
    pay_ID          INTEGER REFERENCES payment(pay_ID) ON UPDATE CASCADE
);

CREATE TABLE promotions (
    promo_ID        SERIAL PRIMARY KEY,
    discount_rate   NUMERIC(4,0),
    promo_name      VARCHAR(20),
    product_ID      INTEGER REFERENCES product(product_ID) ON DELETE CASCADE,
    pay_ID          INTEGER REFERENCES payment(pay_ID) ON UPDATE CASCADE,
    service_ID      INTEGER REFERENCES services(service_ID) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE personnel (
    emp_ID          SERIAL PRIMARY KEY,
    emp_Fname       VARCHAR(20),
    emp_Lname       VARCHAR(20),
    salary          NUMERIC(8,2) CHECK (salary > 0),
    service_ID      INTEGER REFERENCES services(service_ID) ON DELETE CASCADE
);

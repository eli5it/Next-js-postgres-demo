-- Test data for customer table
INSERT INTO customer (first_name, last_name, email, phone_num)
VALUES 
    ('John', 'Doe', 'john@example.com', 1234567890),
    ('Jane', 'Smith', 'jane@example.com', 9876543210),
    ('Alice', 'Johnson', 'alice@example.com', 5551234567);

-- Test data for services table
INSERT INTO services (department_name)
VALUES 
    ('Sales'),
    ('Support'),
    ('Marketing');

-- Test data for payment table
INSERT INTO payment (pay_date, total_amount)
VALUES 
    ('2023-01-10', 500),
    ('2023-02-15', 750),
    ('2023-03-20', 1000);

-- Test data for product table
INSERT INTO product (p_name, price, stock_quant)
VALUES 
    ('Product A', 50, 100),
    ('Product B', 75, 80),
    ('Product C', 100, 120);
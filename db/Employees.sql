CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  in_management BOOLEAN NOT NULL,
);
INSERT INTO employees (first_name, last_name, in_management)
('Joe', 'Black', 1),
('Johny', 'Cash', 0),
('Micheal', 'Jordan', 0),
('Charles', 'Oakley', 1),
('Oprah', 'Wenfrey', 0),

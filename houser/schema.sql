CREATE TABLE properties
  (
    propertyId SERIAL PRIMARY KEY,
    propertyName varchar(80), 
    address varchar(80), 
    city varchar(80), 
    state varchar(80), 
    zip varchar(80)
  );


INSERT INTO properties
(propertyname, address, city, state, zip, image, mortgageamt, desiredrent)
values 
('Duplex', '123 S. Main Street', 'West Valley', 'UT', '84128', 'http://http.cat/100', 1696, 2000 ),
('Mansion', '136 Pennsylvania Ave', 'Washington', 'DC', '12345', 'http://http.cat/200', 2392, 3000),
('Boat House', '1982 Clogg Street', 'Denver', 'CO', '26762', 'http://http.cat/300', 5467, 4000);



-- ALTER TABLE properties
-- ADD COLUMN image varchar(80); 
DROP TABLE IF EXISTS calendar;

CREATE TABLE calendar
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(300),
    address VARCHAR
    (300),
    dancetype VARCHAR
    (255),
    starthour TIME,
    endhour TIME,
    date0 DATE,
    date1 DATE,
    date2 DATE,
    date3 DATE,
    date4 DATE,
    date5 DATE,
    date6 DATE,
    repeats VARCHAR
    (255),
    description VARCHAR
    (1000),
    cost VARCHAR
    (255),
    price VARCHAR(300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO calendar
    (title, dancetype, starthour, endhour, date0, date1, date2, date3, date4, date5, date6, repeats, address, description, cost, price)
VALUES
    ('today event', 'swing', '09:00:00', '01:00:00', '12/10/19', '13/10/19', '14/10/19', '15/10/19', '16/10/19', '17/10/19', '18/10/19' , 'continuous', 'augustrasse 140', 'its gonna be great, just great', 'true', '2');

ALTER TABLE calendar
ALTER price [SET DATA] TYPE VARCHAR(300);
CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);


INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make a Web App', 1, 'Using Javascript', '2019-05-12');

INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make an App', 1, 'Using Dart', '2019-05-13');

INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make a Desktop App', 2, 'Using C++ ', '2019-05-14');





CREATE TABLE person (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY (user_id)
);
CREATE TABLE project (
      name VARCHAR(255),
      text TEXT,
      user_id VARCHAR(255) NOT NULL,
      project_id VARCHAR(255) UNIQUE,
      creation_time DATE,
      last_update TIMESTAMP,
      PRIMARY KEY (user_id)
);
CREATE TABLE book (
      name VARCHAR(255),
      authors VARCHAR(255),
      book_id VARCHAR(255),
      year VARCHAR(255),
      pdf VARCHAR(255),
      cover VARCHAR(255)
);

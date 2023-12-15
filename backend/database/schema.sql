create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);

create table article (
  id int unsigned primary key auto_increment not null,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  content LONGTEXT NOT NULL,
  stars INT NOT NULL,
  is_published TINYINT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


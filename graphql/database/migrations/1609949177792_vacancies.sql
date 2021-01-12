CREATE TABLE IF NOT EXISTS {}.vacancies (
    vacancy_id INT(12) NOT NULL auto_increment PRIMARY KEY,
    vacancy_category_id INT(12) NOT NULL,
    vacancy_title VARCHAR(100) NOT NULL,
    vacancy_position VARCHAR(20) NOT NULL,
    vacancy_description MEDIUMTEXT NOT NULL,
    vacancy_created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    vacancy_image VARCHAR(400) NOT NULL DEFAULT 'default.jpg',
    vacancy_car VARCHAR(20),
    vacancy_country VARCHAR(50) NOT NULL,
    vacancy_longitude FLOAT NOT NULL,
    vacancy_latitude FLOAT NOT NULL,
    INDEX vtitle (vacancy_title),
    CONSTRAINT fk_vcategory FOREIGN KEY(vacancy_category_id)
    REFERENCES categories(category_id)
)
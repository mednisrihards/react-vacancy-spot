CREATE TABLE IF NOT EXISTS {}.users (
    user_id INT(12) NOT NULL auto_increment PRIMARY KEY,
    user_role_id INT(12) NOT NULL,
    user_email VARCHAR(30) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_image VARCHAR(255),
    user_first_name  VARCHAR(50),
    user_last_name VARCHAR(50),
    user_personal_code VARCHAR(50),
    user_phone VARCHAR(50),
    user_driving_licence TINYINT(1),
    INDEX uemail (user_email),
    CONSTRAINT fk_urole FOREIGN KEY(user_role_id)
    REFERENCES roles(role_id)
)
INSERT INTO roles(role_title)
VALUES
('admin'),
('subscriber');

INSERT INTO categories(category_title)
VALUES
('Metālapstrāde'),
('Montāžas darbi'),
('Celtniecība');

INSERT INTO users(user_role_id, user_email, user_password, user_first_name, user_last_name)
VALUES
(2, 'test1@test.com', 'test', 'Raimonds', 'Pauls'),
(2, 'test2@test.com', 'test', 'Laima', 'Vaikule'),
(2, 'test3@test.com', 'test', 'Ronalds', 'Krūza'),
(2, 'test4@test.com', 'test', 'Jānis', 'Liepa'),
(2, 'test5@test.com', 'test', 'Rinalds', 'Vaišļa'),
(2, 'test6@test.com', 'test', 'Raivis', 'Lapinskis'),
(1, 'admin1@admin.com', 'admin', 'Rihards', 'Mednis'),
(1, 'admin2@admin.com', 'admin', 'Donats', 'Saļņikovs');

INSERT INTO vacancies (vacancy_title, vacancy_position, vacancy_description, vacancy_category_id, vacancy_car, vacancy_country, vacancy_longitude, vacancy_latitude)
VALUES
('Metinātājs Mig/tig', 'Metinātājs', '
Darba pienākumi:
- Detaļu sagatavošana metināšanai. 
- Detaļu metināšana. 
- Dimensiju un kvalitātes pārbaudes. 
- Detaļu pēcapstrāde.',
1, 100, 'Somija', 26.563498, 60.723115),
('Konkursa kārtībā uz patstāvīgu darbu aicinam savā komandā', 'Metinātājs', 'Nepieciešamās prasmes:
- pieredze ar Mig/mag (sētas, vārti, margas)
- strādāt saskaņā ar rasējumiem: saķeršana un metināšana',
1, '120', 'ASV', -73.989308, 40.741895),
('Aicinām darbā Celtniecības remontstrādnieku', 'Celtnieks', 'Mēs Tev uzticēsim:
- Izgatavot, montēt, uzstādīt, demontēt, remontēt un atjaunot būvizstrādājumus, ēku remontdarbu un namdara darbu izpildi
- Veikt izgatavotā būvizstrādājuma kvalitātes kontroli
- Kopt un uzturēt darba kārtībā instrumentus un mehānismus', 1, '120', 'Zviedrija', 20.308157, 65.790558),
('Meklējam iekšdarbu meistarus', 'Celtnieks', 'Meklējam iekšdarbu meistarus darbs saitīts ar reĝipša špaktalēšanu tapešu līmēšanu, kråsošanu kā arī visádiem dażadiem darbiem. Darbs KOMANDÉJUMOS algas tiek maksátas laicīgi bez kavèjumiem. ALKAHOLA UN LAIMES MEKLĒTÁJUS lūgums netraucēt.',
1, null, 'Zviedrija', 17.554365, 65.184355),
('Необходим сотрудник в нашу компанию', 'плотник', 'Ищем ответственного плотника-столяра для строительства бань-бочек. Строго без вредных привычек. Специализация и опыт в работе с деревом - обязателен. 
Обязательное условие - CV (в любом оформлении) на э-почту. Можно дополнительно высылать фото объектов, которые были сделаны именно вами, для примера.',
1, '120', 'Zviedrija', 16.250769, 66.858005),
('Aicina darbā betonētāju', 'Betonētājs', 'SIA Expon (grīdu betonēšanas uzņēmums) saistībā ar darba apjoma palielināšanos aicina darbā betonētāju-vilcēju ar pieredzi, bez kaitīgiem ieradumiem. Uzņēmums atrodas Tukumā, taču darbs ir visā Latvijā – lielākoties Rīgā. Kandidātam nepieciešama B kategorijas autovadītāja apliecība.',
1, null, 'Somija', 23.274809, 62.483336);
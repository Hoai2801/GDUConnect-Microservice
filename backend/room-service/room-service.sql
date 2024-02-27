create database room_service;
use room_service;
create table rooms(
	id int primary key auto_increment,
    title varchar(1000) not null,
    district varchar(100) not null,
    ward varchar(100) not null,
    price decimal(8, 0) not null,
    area int not null,
    description varchar(1500) not null,
    phone_number varchar(10),
    facebook varchar(200),
    created_at datetime not null,
    user_id int not null
);

create table post_image(
	id int primary key auto_increment,
    post_id int not null,
    image_url varchar(1000) not null,
    foreign key(post_id) references rooms(id)
);


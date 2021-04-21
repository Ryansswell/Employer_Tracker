USE Employer_Tracker;

insert into Department (name) values ("Housekeeping"), ("Front Desk"), ("Valet");
insert into
	Role (title, salary, department_id)
Values
	("Attendant", 56 ,1),
	("Concierge", 67 , 2),
    ("Driver", 76 , 3);
insert into 
	Employee (first_name, last_name, role_id, manager_id)
    Values
	("Tom","Jones", 1 ,null),
	("Mike", "Rogers", 2 , 1),
    ("Nick", "Sanders", 3 , 1);
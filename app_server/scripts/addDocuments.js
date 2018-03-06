db.dropDatabase();

db.food.save(
    [
        {eng:'Steamed square cake', viet:'Banh chung'},
        {eng:'Vietnamese ham', viet:'Gio Cha'},
        {eng:'Sticky rice', viet:'Xoi'},
        {eng:'Boiled chicken', viet:'Ga luoc'},
        {eng:'Pickled Onions', viet:'Hanh muoi'},
        {eng:'Candied fruits', viet:'Mut'}
    ]
);

db.flowers.save(
    [
        {eng:'Peach flower', viet: 'Hoa dao', type :'Flower'},
        {eng:'Ochna integerrima', viet: 'Hoa mai', type :'Flower'},
        {eng:'Marumi kumquat', viet: 'Cay quat', type :'Plant'},
        {eng:'Paperwhite flower', viet: 'Hoa thuy tien', type :'Flower'},
        {eng:'Gladiolus', viet: 'Hoa lay on', type :'Flower'},
        {eng:'Aroid Palm', viet:'Cay kim tien', type: 'Plant'},
        {eng:'Camellia', viet: 'Hoa hai duong', type :'Flower'},
        {eng:'Lucky Bamboo', viet:'Cay phat loc', type: 'Plant'}
    ]
);

db.dates.save(
    [
        {eng:'Kitchen God day', viet: 'Ong Cong, Ong tao', day :'December 23rd'},
        {eng:'Family reunion', viet: 'Tat nien', day :'December 30th'},
        {eng:'New Year\'s Eve', viet: 'Giao thua', day :'December 31st'},
        {eng:'Visit relatives, friends and neighbours', viet: '', day :'January 1st - 5th'},
        {eng:'Burn the offerings for ancestors', viet: 'Hoa vang', day :'January 4th'},
        {eng:'First full moon of the year', viet: 'Tet Nguyen Tieu', day :'January 15th'}
    ]
);
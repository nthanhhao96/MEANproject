
const list = function(req, res){
    res.render('flowers',{
        things:
            [
                {eng:'Peach flower', viet: 'Hoa dao', type :'Flower'},
                {eng:'Ochna integerrima', viet: 'Hoa mai', type :'Flower'},
                {eng:'Marumi kumquat', viet: 'Cay quat', type :'Plant'},
                {eng:'Paperwhite flower', viet: 'Hoa thuy tien', type :'Flower'},
                {eng:'Gladiolus', viet: 'Hoa lay on', type :'Flower'},
                {eng:'Aroid Palm', viet:'Cay kim tien', type: 'Plant'},
                {eng:'Camellia', viet: 'Hoa hai duong', type :'Flower'},
                {eng:'Lucky Bamboo', viet:'Cay phat loc', type: 'Plant'}
            ]});
};

module.exports = {
    list
};

const list = function(req, res){
    res.render('dates',{
        things:
            [
                {eng:'Kitchen God day', viet: 'Ong Cong, Ong tao', day :'December 23rd'},
                {eng:'Family reunion', viet: 'Tat nien', day :'December 30th'},
                {eng:'New Year\'s Eve', viet: 'Giao thua', day :'December 31st'},
                {eng:'Visit relatives, friends and neighbours', viet: '', day :'January 1st - 5th'},
                {eng:'Burn the offerings for ancestors', viet: 'Hoa vang', day :'January 4th'},
                {eng:'First full moon of the year', viet: 'Tet Nguyen Tieu', day :'January 15th'}
            ]});
};

module.exports = {
    list
};
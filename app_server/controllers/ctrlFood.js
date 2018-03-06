
const list = function(req, res){
    res.render('food',{
        things:
            [
                {eng:'Steamed square cake', viet:'Banh chung'},
                {eng:'Vietnamese ham', viet:'Gio Cha'},
                {eng:'Sticky rice', viet:'Xoi'},
                {eng:'Boiled chicken', viet:'Ga luoc'},
                {eng:'Pickled Onions', viet:'Hanh muoi'},
                {eng:'Candied fruits', viet:'Mut'}
            ]});
};
module.exports = {
    list
};
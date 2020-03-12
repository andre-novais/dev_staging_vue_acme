var lodash = require('lodash');

export function cont_pot_categoria (arr){
    let new_arr = lodash.countBy(arr, function(json){return alert(json.occured_at) == 201909})
    return new_arr}
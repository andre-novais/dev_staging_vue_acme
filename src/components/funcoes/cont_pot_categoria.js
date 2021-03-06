var lodash = require('lodash');

export function cont_pot_categoria (arr, unique_arr){
    let unique = unique_arr
    let new_arr = []
    lodash.uniqBy(arr,'occured_at').forEach(json => new_arr.push({'x':json['occured_at']}));
    new_arr.forEach((json) => json['value'] = lodash.uniqBy(arr.filter((elem)=>elem['occured_at']<=json.x),'id_cliente').length);
    return new_arr;
}
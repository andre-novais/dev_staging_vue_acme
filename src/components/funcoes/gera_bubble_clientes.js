var lodash = require('lodash');

export function gera_bubble_clientes(arr, unique_arr){

    let new_arr = [];
    lodash.uniqBy(arr,'id_cliente').forEach(json => new_arr.push({'id':json['id_cliente']}));

    new_arr.forEach((json)=>{

        let variedade = []
        let valor = 0
        let n_compras = 0

        arr.forEach((row)=>{
            if(row['id_cliente']==json['id']){
                //alert(JSON.stringify(row))
                Object.keys(row['js_produtos']).forEach((produto)=>{
                    if(variedade.indexOf(produto)==-1){
                        variedade.push(produto)
                    }
                    //alert(JSON.stringify(row['js_produtos']))
                    //alert(JSON.stringify(row['js_produtos'][produto]))
                    //alert(produto)
                    //alert(JSON.stringify(row['js_produtos'][produto]['preco']))
                    valor += (row['js_produtos'][produto]["preco"] * row['js_produtos'][produto]['quantidade'])
                })
            }
        })

        n_compras =arr.filter(elem=>{
            return ((elem['id_cliente']==json['id'])&&(elem['ds_evento']=='compra_efetuada'))
        }).length
        /* alert(JSON.stringify(arr.filter(elem=>{
            return ((elem['id_cliente']==json['id'])&&(elem['ds_evento']=='compra_efetuada'))
        }))) */

        json['x'] = n_compras
        json['size'] = valor
        json['value'] = variedade.length

    })
    let filtrado = new_arr.filter(json=>json['x']>0)

    return filtrado
}
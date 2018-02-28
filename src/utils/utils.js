export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const whatDoIHaveToMap = (cuantosdias, cuantosnum) => {
    const x = [...cuantosdias];
    if (cuantosdias.slice(-1).pop() === "FIN"){

        if(cuantosnum
                        .filter(deundia => 
                        deundia.dia === x.length - 1)
                        .length === 0) {
            return x.slice(0, x.length -2);
        }else{
        return x.slice(0, x.length -1);
        }
    }
    else return x;
} 
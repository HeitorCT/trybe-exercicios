const employee = (full_name, callback) => {
    return {
        name: full_name,
        eMail: callback(full_name),
    }
}

const makeEmail = (full_name) => {
    return `${full_name.toLowerCase().replace(' ','_')}@trybe.com`;
}

const newEmployees = () => {
    const employees = {
      id1: employee('Pedro Guerra',makeEmail), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employee('Luiza Drumond',makeEmail), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employee('Carla Paiva',makeEmail), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};



console.table(newEmployees());
module.exports = (sequelize, DataTypes) => {
    const endereco = sequelize.define('endereco', {
      customerId: DataTypes.INTEGER,
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      cep: DataTypes.STRING
    });
    
    return endereco;
  }
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [3]
        }
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0
        }
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
          min: 0
        }
      }
    },
    {
      timestamps: false
    }
  );

  Product.associate = function(models) {
    Product.belongsTo(models.Store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Product;
};




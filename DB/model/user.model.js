import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import blogModel from "./blog.model.js";

const userModel = sequelize.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
      type:DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    confirmEmail:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
  
}, {
    timestamps: false
});

userModel.hasMany(blogModel,{
  foreignKey:{
    name: "UserId",
    type:DataTypes.INTEGER
  }
  });
  blogModel.belongsTo(userModel);
export default userModel;
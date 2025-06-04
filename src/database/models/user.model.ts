import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript"


@Table({
    tableName : 'users',//name of table
    modelName : 'User',//name of table to access
    timestamps : true//kasaile tablema data entry ya update gareko automatic time insert gardincha
})

class User extends Model{
@Column({
    primaryKey : true,
    type : DataType.UUID,
    defaultValue : DataType.UUIDV4

})
declare id : string

    @Column({
        type : DataType.STRING

    })
    declare username : string

    @Column({
        type : DataType.STRING
    })
    declare password : string

    @Column({
        type : DataType.STRING
    })
    declare email : string

    @Column ({
        type : DataType.ENUM('teacher','institute','student','super-admin'),
        defaultValue :'student'
    })
    declare role : string

}
export default User //export class lai garnu parxa,export gareyna vane aru thau import garna mildaena,trigger hudaena
import Sequelize from 'sequelize'

const User = (sequelize) =>
  sequelize.define('user', {
    names: { type: Sequelize.STRING },
    surnames: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  })

const Make = (sequelize) =>
  sequelize.define('make', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: { type: Sequelize.STRING }
  })

const Model = (sequelize) =>
  sequelize.define('model', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    makeId: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    similarSoundingWordToNameParagraph: { type: Sequelize.STRING }
  })

const Car = (sequelize) =>
  sequelize.define('car', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    modelId: { type: Sequelize.STRING },
    colour: { type: Sequelize.STRING },
    year: { type: Sequelize.STRING }
  })

Car.associate = () => Car.belongsTo(Model, { foreignKey: 'modelId', as: 'company' })
Model.associate = () => Model.belongsTo(Make, { foreignKey: 'makeId', as: 'company' })

export const initializeModel = (sequelize) => ({
  User: User(sequelize),
  Car: Car(sequelize),
  Model: Model(sequelize),
  Make: Make(sequelize)
})

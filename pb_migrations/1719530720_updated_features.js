/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9lyrlkckbbkqn3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiq8q0q5",
    "name": "pickable",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9lyrlkckbbkqn3")

  // remove
  collection.schema.removeField("eiq8q0q5")

  return dao.saveCollection(collection)
})

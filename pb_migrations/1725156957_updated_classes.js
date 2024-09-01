/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wogvp0yiz9j6gk")

  // remove
  collection.schema.removeField("5mvwbkzq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wogvp0yiz9j6gk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5mvwbkzq",
    "name": "spellcasting",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "third",
        "half",
        "artificer",
        "full",
        "pact"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

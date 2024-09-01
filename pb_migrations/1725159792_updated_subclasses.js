/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("csfymimcjrgey0k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9ri6afd",
    "name": "addsSpellcasting",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("csfymimcjrgey0k")

  // remove
  collection.schema.removeField("y9ri6afd")

  return dao.saveCollection(collection)
})

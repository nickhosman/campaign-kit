/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdfvumudh4r82xp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x9fuolso",
    "name": "speed",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdfvumudh4r82xp")

  // remove
  collection.schema.removeField("x9fuolso")

  return dao.saveCollection(collection)
})

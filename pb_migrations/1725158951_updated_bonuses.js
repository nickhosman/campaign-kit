/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajiaa96uutqlexr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7yv7bvvk",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajiaa96uutqlexr")

  // remove
  collection.schema.removeField("7yv7bvvk")

  return dao.saveCollection(collection)
})

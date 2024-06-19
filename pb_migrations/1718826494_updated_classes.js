/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("784mqenxj5esqct")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ey9lf86e",
    "name": "features",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9f7gse9u5uphnrx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("784mqenxj5esqct")

  // remove
  collection.schema.removeField("ey9lf86e")

  return dao.saveCollection(collection)
})

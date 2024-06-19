/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9f7gse9u5uphnrx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0xr7xdan",
    "name": "source",
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
  const collection = dao.findCollectionByNameOrId("9f7gse9u5uphnrx")

  // remove
  collection.schema.removeField("0xr7xdan")

  return dao.saveCollection(collection)
})

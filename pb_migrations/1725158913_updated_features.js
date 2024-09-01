/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwttknu4c5heulp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y5qmrwdg",
    "name": "bonus",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ajiaa96uutqlexr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kwttknu4c5heulp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y5qmrwdg",
    "name": "bonus",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ajiaa96uutqlexr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})

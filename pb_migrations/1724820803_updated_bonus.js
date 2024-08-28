/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajiaa96uutqlexr")

  collection.name = "bonuses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ajiaa96uutqlexr")

  collection.name = "bonus"

  return dao.saveCollection(collection)
})

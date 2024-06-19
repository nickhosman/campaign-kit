/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "784mqenxj5esqct",
    "created": "2024-06-19 19:42:45.405Z",
    "updated": "2024-06-19 19:42:45.405Z",
    "name": "classes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "evukrzox",
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
      },
      {
        "system": false,
        "id": "lrrwqiwg",
        "name": "hitDie",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("784mqenxj5esqct");

  return dao.deleteCollection(collection);
})

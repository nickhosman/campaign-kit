/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q7cm32lebfjnqod",
    "created": "2024-09-01 03:11:21.017Z",
    "updated": "2024-09-01 03:11:21.017Z",
    "name": "fightingStyles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tqhosreh",
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
        "id": "odiwcwn6",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("q7cm32lebfjnqod");

  return dao.deleteCollection(collection);
})

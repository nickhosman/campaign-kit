/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u9lyrlkckbbkqn3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "u9lyrlkckbbkqn3",
    "created": "2024-06-27 23:16:58.339Z",
    "updated": "2024-06-27 23:25:20.942Z",
    "name": "features",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jkd5oa6z",
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
        "id": "sxodmyky",
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
      },
      {
        "system": false,
        "id": "qeedyzn1",
        "name": "level",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 20,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "j10zqo94",
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
      },
      {
        "system": false,
        "id": "eiq8q0q5",
        "name": "pickable",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
})

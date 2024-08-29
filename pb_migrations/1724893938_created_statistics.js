/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "htuwohg7catda7x",
    "created": "2024-08-29 01:12:18.108Z",
    "updated": "2024-08-29 01:12:18.108Z",
    "name": "statistics",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "efsmy9ef",
        "name": "strength",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "v70vjtxm",
        "name": "dexterity",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "m7gvhsjl",
        "name": "constitution",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "ywvw5fu6",
        "name": "wisdom",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "texayonh",
        "name": "intelligence",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "lxfjx5wy",
        "name": "charisma",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "noDecimal": true
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
  const collection = dao.findCollectionByNameOrId("htuwohg7catda7x");

  return dao.deleteCollection(collection);
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g4ujzuphn6jycqb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "g4ujzuphn6jycqb",
    "created": "2024-06-27 23:10:15.492Z",
    "updated": "2024-06-27 23:10:15.492Z",
    "name": "characters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w31b8lvr",
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
        "id": "heywyuym",
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
        "id": "n39v6jkv",
        "name": "strength",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "hjhi9ygy",
        "name": "dexterity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "7m83fu4u",
        "name": "constitution",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "hbqunlsh",
        "name": "intelligence",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "zxnnxvjh",
        "name": "wisdom",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 30,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "kgiii5ra",
        "name": "charisma",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
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
})

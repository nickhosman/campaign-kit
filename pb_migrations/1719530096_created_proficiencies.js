/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uf6uq1x2ipc3vw0",
    "created": "2024-06-27 23:14:56.977Z",
    "updated": "2024-06-27 23:14:56.977Z",
    "name": "proficiencies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6yk7vaau",
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
        "id": "rqmosgbw",
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
        "id": "rfue201x",
        "name": "level",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 20,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "lhqcvdvf",
        "name": "value",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "none",
            "proficient",
            "expertise"
          ]
        }
      },
      {
        "system": false,
        "id": "jwqqylxq",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "skill",
            "save",
            "weapon",
            "armor"
          ]
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
  const collection = dao.findCollectionByNameOrId("uf6uq1x2ipc3vw0");

  return dao.deleteCollection(collection);
})

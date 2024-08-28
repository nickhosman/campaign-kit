/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ajiaa96uutqlexr",
    "created": "2024-08-28 04:51:22.260Z",
    "updated": "2024-08-28 04:51:22.260Z",
    "name": "bonus",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fcqvwdvj",
        "name": "stat",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "STR",
            "DEX",
            "CON",
            "WIS",
            "INT",
            "CHA"
          ]
        }
      },
      {
        "system": false,
        "id": "nnbjq9bc",
        "name": "value",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 2,
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
  const collection = dao.findCollectionByNameOrId("ajiaa96uutqlexr");

  return dao.deleteCollection(collection);
})

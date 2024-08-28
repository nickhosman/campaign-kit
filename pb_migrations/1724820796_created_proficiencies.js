/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kaim1iq9tznfxkl",
    "created": "2024-08-28 04:53:16.371Z",
    "updated": "2024-08-28 04:53:16.371Z",
    "name": "proficiencies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qz7wfdt8",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "LANGUAGE",
            "ARMOR",
            "TOOL",
            "SKILL",
            "SAVING_THROW",
            "WEAPON"
          ]
        }
      },
      {
        "system": false,
        "id": "nsv46x9p",
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
  const collection = dao.findCollectionByNameOrId("kaim1iq9tznfxkl");

  return dao.deleteCollection(collection);
})

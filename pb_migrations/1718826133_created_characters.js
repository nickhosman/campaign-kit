/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6vb5jnf1cd4bpin",
    "created": "2024-06-19 19:42:13.442Z",
    "updated": "2024-06-19 19:42:13.442Z",
    "name": "characters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vroqox17",
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
  const collection = dao.findCollectionByNameOrId("6vb5jnf1cd4bpin");

  return dao.deleteCollection(collection);
})

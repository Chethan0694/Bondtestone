function Get({dataStore, client}) {
  console.log("Get sync started");
  var response = client.fetchSync('/posts');
  dataStore.save("Get", response.jsonSync());
  console.log("Get sync finished");
}
integration.define({
  synchronizations: [
      {
          name: "Get_Response",
          fullSyncFunction: Get
      }
  ],
  model: {
    tables: [
        {
            name: "Get",
            columns: [
                {
                    name: "userId",
                    type: "INTEGER",
                    
                },
                {
                    name: "id",
                    type: "INTEGER",
                    primaryKey: true,
                  
                },
                {
                    name: "title",
                    type: "STRING",
                    length: 250,
                },
                {
                  name : "body",
                  type : "STRING",
                  length : 250,
                }

            ]
        }
    ]
}
});
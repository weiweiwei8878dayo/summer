// サンプルのデータベース
var database = [
  "Apple Inc. is an American multinational technology company.",
  "Google LLC is an American multinational technology company.",
  "Microsoft Corporation is an American multinational technology corporation.",
  "Amazon.com, Inc. is an American multinational technology company.",
];

// 検索関数
function search(query) {
  var results = [];
  var regex = new RegExp(query, "i");
  for (var i = 0; i < database.length; i++) {
    if (regex.test(database[i])) {
      results.push(database[i]);
    }
  }
  return results;
}

// ユーザーからの入力を受け取り、検索を実行する例
var userInput = prompt("検索クエリを入力してください:");
var searchResults = search(userInput);
console.log(searchResults);

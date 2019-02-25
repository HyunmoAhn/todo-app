# Todo App Server Using Express

## API

### Make Todo
```
api: /todo/add
method: post
body: {
  value: String,
  isComplete: Bool,
}
```

### Edit Todo Value
```
api: /todo/edit
method: post
body: {
  id: String,
  value: String,
}
```

### Edit Todo isComplete
```
api: /todo/edit
method: post
body: {
  id: Array(String) || String,
  isComplete: Bool,
}
```

### Delete Todo
```
api: /todo
method: delete
body: {
  id: Array(String) || String,
}
```


### Read Todo list 
```
api: /todo
method: get
body: {
  isComplete: Bool || undefined,
}
```
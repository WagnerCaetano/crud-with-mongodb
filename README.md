
# Crud With Mongodb

### I used this project in node + Express to provide data from a mongodb database to a angular web page.




## How to run

To use this project you can simply use npm 

First:
```bash
  npm install
```

If everything works well, run:
```bash
  npm start
```
And its running.




## API docs

#### Return all the participants

```http
  GET /
```

#### Add a participant

```http
  PUT /
```

| Parâmetro          | Tipo       | Descrição                                   |
| :----------------- | :--------- | :------------------------------------------ |
| `participant`      | `string`   | **Required**. The name of the participant   |

#### Set winner

```http
  PUT /winner
```

#### Reset the database info

| Parâmetro          | Tipo       | Descrição                                   |
| :----------------- | :--------- | :------------------------------------------ |
| `winner`           | `string`   | **Required**. The name of the winner        |

```http
  DEL /reset
```



# 26th-TodayHouse-Seminar

## User Table

| userIndex (PK) | name | profileUrl |
|------|---|---|
|0|seoYng|http://tineye.com/images/widgets/mona.jpg|
|1|dobleB|http://tineye.com/images/widgets/mona.jpg|
|2|herenous|http://tineye.com/images/widgets/mona.jpg|


## SellImage Table

| imgUrl (PK) | sellIndex (FK) |
|------|---|
|http://tineye.com/images/widgets/mona.jpg|0|
|http://tineye.com/images/widgets/mona.jpg|1|



## PostImage Table

| imgUrl (PK) | postIndex (FK) |
|------|---|
|http://tineye.com/images/widgets/mona.jpg|0|
|http://tineye.com/images/widgets/mona.jpg|1|


## Sell Table

| sellIndex (PK) | category | company | title | price | discount | 
|------|---|------|---|------|---|
|0|가구>소파/거실가구>소파>일반소파|까로네까사|[50조한정] 로니 토스카 4인용 |1379000|63|


## Post Table

| postIndex (PK) | location ( NULL 허용) | content |


## Review Table

| reviewIndex (PK) | content |  createdAt |


## Detail Table

| detailIndex (PK) | imgUrl |  title | price | content |


# 26th-TodayHouse-Seminar

![image](https://user-images.githubusercontent.com/37873745/83325452-4b9c6400-a2a7-11ea-8128-2d8bc5e51df0.png)
![image](https://user-images.githubusercontent.com/22907830/83326061-ff075780-a2ab-11ea-89eb-57be72cdf90e.png)
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

| postIndex (PK) | userIndex(FK) | location ( NULL 허용) | content |
| ---- | ---- | ---- | --- |
|1|12|나의 다락방| 나의 집은 참 편하다. 얼마나 편하냐면 .... | 
|2|5|북한산| 자연속 나의 집. 자연 속에 살아가는 것이란 .... | 
|3|9|이케아| 광명시 이케아. 아주 잘 꾸며놨다. 나는 이걸 추천한다 ...| 


## Review Table

| reviewIndex (PK) | userIndex(FK) | sellIndex(FK) | content | createdAt | imgUrl |
| --- | --- | --- | --- | --- |
|1|5|3|이거 너무 이쁘고 좋아요. 짱!|2018-05-01| http://tineye.com/images/widgets/mona.jpg |
|2|2|32|무거워서 불편한 점이 있지만, 인테리어적으로 최곱니다.|2019-02-01| http://tineye.com/images/widgets/mona.jpg |
|3|19|11|SOPT 사무실에 너무 잘어울려요. 최고 !|2020-05-01| http://tineye.com/images/widgets/mona.jpg |


## Detail Table

| detailIndex (PK) | postIndex (FK) | imgUrl |  company | price | content |
| --- | --- | --- | --- | --- | --- |
|1|2|http://tineye.com/images/widgets/mona.jpg|BB company|56000|산 속 의자|
|2|13|http://tineye.com/images/widgets/mona.jpg|SOPT company|99000|Virtual Desk|
|3|22|http://tineye.com/images/widgets/mona.jpg|IKEA|23000|IKEA Light|

## Banner Table
| bannerUrl |
| --- |
| http://tineye.com/images/widgets/mona1.jpg |
| http://tineye.com/images/widgets/mona2.jpg |
| http://tineye.com/images/widgets/mona3.jpg |



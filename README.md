# API Auth 
> 
Authentication API for the Ceseat application, uses a mongodb database and an MSSQL database (6 routes)
**port : 3001**

### POST /login 
> verify password and email, create accesstoken and refreshtoken for connection

#### In :
**autorization** : /
**body (JSON)** : STRING **email** ,STRING **password **
#### Out
**exit (JSON)** : STRING **accesstoken**, INT **userId**

------------


### POST /logout 
> destroy refreshtoken

#### In :
**autorization** : BEARER **accesstoken**
**body (JSON)** : /
#### Out
**exit**" :  STRING **"disconnected"**

------------


### POST /accesstoken
>  renew accesstoken

#### In :
**autorization** : BEARER **accesstoken**
**body (JSON)** : /
#### Out
**exit ** :  BEARER **accesstoken**


------------

### POST /dev/login 
> verify password and email, create dev accesstoken and dev refreshtoken for connection

#### In :
**autorization** : /
**body (JSON)** : STRING **email** ,STRING **password **
#### Out
**exit (JSON)** : STRING **accesstoken**, INT **userId**

------------


### POST /dev/logout 
> destroy dev refreshtoken

#### In :
**autorization** : BEARER **accesstoken**
**body (JSON)** : /
#### Out
**exit**" :  STRING **"disconnected"**

------------


### POST /dev/accesstoken
>  renew dev accesstoken

#### In :
**autorization** : BEARER **accesstoken**
**body (JSON)** : /
#### Out
**exit ** :  BEARER **accesstoken**
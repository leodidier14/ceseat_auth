# ceseat_auth
Auth_API :
POST /login -> vérifie les identifiants du user et donne un token si OK
POST /accesstoken -> vérifie si le token est en cours d'utilisation renvoie true ou false
PUT /logout -> Met fin à la connexion (kill le token existant) 
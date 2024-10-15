1. Créer un Livre :
Les utilisateurs peuvent ajouter de nouveaux livres à la base de données en envoyant une requête POST à l'endpoint /bibliotheque/livre et chaque livre doit inclure un titre (obligatoire), un auteur (obligatoire), une année de publication , un genre , et un nombre de pages.
![image](https://github.com/user-attachments/assets/356f16c5-7a44-4559-99db-3a9f3f780694)

2. Lire tous les Livres :
Une requête GET à l'endpoint /bibliotheque/livre récupère tous les livres stockés dans la base de données.
![image](https://github.com/user-attachments/assets/2f53839b-d79c-441a-90eb-e30350d8d1e6)
![image](https://github.com/user-attachments/assets/6d178547-62a2-48df-98cf-d6e81ddd1536)

4. Lire un Livre Spécifique :
Les utilisateurs peuvent obtenir les détails d'un livre spécifique en utilisant son ID en envoyant une requête GET à /bibliotheque/livre/:id.
![image](https://github.com/user-attachments/assets/8d6d718f-fc23-4f29-8b90-eb696571acfc)
5. Mettre à Jour un Livre :
Les utilisateurs peuvent mettre à jour les détails d'un livre existant en envoyant une requête PUT à /bibliotheque/livre/:id et L'API renvoie les détails du livre mis à jour si l'opération est réussie.
![image](https://github.com/user-attachments/assets/46d279a9-d702-47e8-82b6-b3502713201e)
6. Supprimer un Livre :
Une requête DELETE à /livre/:id permet aux utilisateurs de retirer un livre de la base de données.
![image](https://github.com/user-attachments/assets/abb86eb0-02bb-4296-a7a8-ba75b4ca68c6)





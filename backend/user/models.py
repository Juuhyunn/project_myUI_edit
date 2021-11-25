from django.db import models


class User(models.Model):
    use_in_migrations = True
    user_id = models.AutoField(primary_key=True)
    email = models.TextField()
    password = models.TextField()
    phone = models.TextField()
    name = models.TextField()
    birth = models.TextField()
    address = models.TextField()


    class Meta:
        db_table = "users"

    def __str__(self):
        return f'[{self.pk}] {self.user_id}'
from django.db import models

# Create your models here.
from django.db import models


class Item(models.Model):
    use_in_migrations = True
    item_id = models.AutoField(primary_key=True)
    price = models.TextField()


    class Meta:
        db_table = "items"


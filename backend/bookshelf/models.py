from django.db import models
from authentication.models import User

# Create your models here.
class Bookshelf(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book_id = models.CharField(max_length=100)

    class Meta:
        unique_together = ('user', 'book_id')
from django.db import models
from django.contrib.auth.models import User
from authentication.models import User

# Create your models here.
class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book_id = models.CharField(max_length=100)

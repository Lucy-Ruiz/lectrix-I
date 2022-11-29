from rest_framework import serializers
from .models import WishList

class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = ['id', 'book_id', 'user_id']
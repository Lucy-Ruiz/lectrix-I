from rest_framework import serializers
from .models import Bookshelf

class BookshelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookshelf
        fields = ['id', 'book_id', 'user_id']
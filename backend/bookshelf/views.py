from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Bookshelf
from bookshelf import serializers
from .serializers import BookshelfSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_bookshelf(request, user_id):
    bookshelf = Bookshelf.objects.filter(user_id=user_id)
    serializer = BookshelfSerializer(bookshelf, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_bookshelf(request):
    print(
        'User', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = BookshelfSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        bookshelf = Bookshelf.objects.filter(user_id=request.user.id)
        serializer = BookshelfSerializer(bookshelf, many=True)
        return Response(serializer.data)

from django.urls import path, include
from bookshelf import views

urlpatters = [
    path('', views.user_bookshelf),
]
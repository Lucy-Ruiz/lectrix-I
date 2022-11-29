from django.urls import path, include
from bookshelf import views

urlpatterns = [
    path('', views.user_bookshelf),
]
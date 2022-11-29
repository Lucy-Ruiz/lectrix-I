from django.urls import path, include
from wish_list import views

urlpatterns = [
    path('', views.user_wish_list),
]
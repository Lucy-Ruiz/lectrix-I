from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('all/', views.get_all_comments),
    path('book_comments/<str:book_id>', views.get_book_comments),
]
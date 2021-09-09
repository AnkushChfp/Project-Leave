from django.urls import path
from database import views
urlpatterns = [
    path('', views.LeaveList.as_view()),
]

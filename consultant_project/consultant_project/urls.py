from django.urls import path
from project import views

urlpatterns = [
    path("", views.index),
    path("documents", views.documents),
    path("risks", views.documents),
]
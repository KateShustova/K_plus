from django.contrib import admin
from django.urls import path, re_path
from tornado.web import url

from project import views

urlpatterns = [
    path('', views.index_page),
    path('admin/', admin.site.urls),
    # re_path("edit/", views.object_edit, name="object_edit"),
]

from django.contrib import admin
from django.urls import path, include
from . import views

# urls internal management
urlpatterns = [
    path('index', views.index),
]

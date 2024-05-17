from django.urls import re_path
from . import views

urlpatterns = [
re_path('a', views.index, name='index'),
]
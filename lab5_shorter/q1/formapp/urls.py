from django.urls import re_path 
from . import views
 
urlpatterns = [
re_path('hello', views.index, name='index'),
] 

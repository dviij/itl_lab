from django.urls import re_path 
from . import views
urlpatterns = [
url('a', views.index, name='index'),
]
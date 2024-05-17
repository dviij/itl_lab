from django.contrib import admin 
from django.urls import path
from django.urls import include, re_path

urlpatterns = [path(r'^admin/',
admin.site.urls),
 re_path('', include('formapp.urls')),
]
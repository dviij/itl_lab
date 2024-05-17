from django.urls import include, re_path, path
from django.contrib import admin 
    
urlpatterns=[path(r'^admin/',
admin.site.urls),
re_path('',include('formapp/urls')),]
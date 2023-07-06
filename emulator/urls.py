from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index),
    path('emulate/',views.emulate),
    path('display-page/', views.display_page, name='get_source_code'),
]

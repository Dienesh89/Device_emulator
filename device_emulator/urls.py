from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('emulator.urls')),
    path('emulate/',include('emulator.urls')),
    path('display-page/',include('emulator.urls'))
]

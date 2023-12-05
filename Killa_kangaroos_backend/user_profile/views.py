from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import UserProfile
from .serializers import UserProfileSerializer

# Create your views here.
class UserProfileModelViewset(ModelViewSet):

    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
from django.shortcuts import render
from .models import NftDetail
from .serializers import NftDetailserializer
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class NftDetailModelViewset(ModelViewSet):

    queryset = NftDetail.objects.all()
    serializer_class = NftDetailserializer
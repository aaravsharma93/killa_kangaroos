from dataclasses import field
from rest_framework import serializers
from .models import NftDetail

class NftDetailserializer(serializers.ModelSerializer):

    class Meta:
        model = NftDetail
        fields = '__all__'
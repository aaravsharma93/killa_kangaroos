from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

class UserInformationSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['id','first_name','last_name','email','password']

class UserProfileSerializer(serializers.ModelSerializer):

    user_info = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['user_info', 'user', 'user_img', 'contact_number']

    def get_user_info(self, object):
        user_detail = User.objects.filter(id=object.user.id).first()
        return UserInformationSerializer(user_detail, many=False).data
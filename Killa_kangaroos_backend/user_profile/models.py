from distutils.command.upload import upload
from statistics import mode
from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    user_img = models.ImageField(upload_to="users", null=True, blank=True)
    contact_number = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return str(self.user.username)
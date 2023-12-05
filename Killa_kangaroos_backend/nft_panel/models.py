from statistics import mode
from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class NftDetail(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    desc = models.CharField(max_length=255, blank=True, null=True)
    tags = models.TextField(blank=True, null=True)
    meta_data = models.TextField(blank=True, null=True)
    nft_img = models.ImageField(upload_to='NFT', blank=True, null=True)
    mint = models.CharField(max_length=150, null=True, blank=True)
    
    def __str__(self):
        return self.name
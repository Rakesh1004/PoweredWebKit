
from django.db import models

# Create your models here.

class userb(models.Model):
    name=models.CharField(max_length=1000)
    username=models.CharField(max_length=100)
    doc=models.DateTimeField(auto_now_add=True)

class blogs(models.model):
    user=models.ForeignKey(userb,on_delete=models.CASCADE)
    text=models.CharField(max_length=10000)
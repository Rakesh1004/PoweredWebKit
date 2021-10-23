
from django.db import models

# Create your models here.

class userb(models.Model):
    name=models.CharField(max_length=1000)
    username=models.CharField(max_length=100)
    doc=models.DateTimeField(auto_now_add=True)
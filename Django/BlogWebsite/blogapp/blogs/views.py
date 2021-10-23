from django.shortcuts import render
from .models import userb


# Create your views here.


def show(request):
    usr=userb.objects.all()
    return render(request,'users.html',{'user':usr}) 

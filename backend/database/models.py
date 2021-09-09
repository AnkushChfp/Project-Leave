from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Leave(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    reason = models.CharField(max_length=60)
    fromDate = models.DateField()
    toDate = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
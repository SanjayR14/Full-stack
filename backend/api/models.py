# api/models.py
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default='example@example.com')


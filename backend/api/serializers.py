# api/serializers.py
from rest_framework import serializers
from .models import Project, Member

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'  # Or specify the fields you want

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'  # Or specify the fields you want

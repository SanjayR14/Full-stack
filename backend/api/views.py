from rest_framework import viewsets
from .models import Project, Member  # Assuming these are your models
from .serializers import ProjectSerializer, MemberSerializer  # Assuming you have these serializers

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

from rest_framework import generics
from .models import Leave
from .serializers import LeaveSerializer

class LeaveList(generics.ListCreateAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

# class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Note.objects.all()
#     serializer_class = NoteSerializer
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
# Create your views here.
@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

#get all notes
@api_view(['GET'])
def getNotes(request):
    #Pass the model Note and get all its values
    notes = Note.objects.all()
    # many allows us to pass a queryset of many notes value as well as give the output in JSON format
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

#get a single note using an id
@api_view(['GET'])
#pass the primary key of the note
def getNote(request, pk):
    #Pass the model Note and filter using the id
    notes = Note.objects.get(id=pk)
    # many is false so as to serialize only one object as well as give the output in JSON format
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)